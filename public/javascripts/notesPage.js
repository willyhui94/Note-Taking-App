"use strict"
$(document).ready(function () {
    function getLanguageList() {
        const successCB = function (data, status, xhr) {
            for (let i = 0; i < data.length; i++) {
                $("#languageSelect").append(new Option(data[i].language, data[i].language));
            }
        }

        const errorCB = function (jqXhr, textStatus, errorMessag) {
            console.log(jqXhr);
            console.log(textStatus);
            console.log(errorMessag);
        }

        const options = {
            async: true,
            type: "GET",
            success: successCB,
            error: errorCB
        }
        $.ajax("/api/languages", options)
    }
    getLanguageList();

    function getSubjectList() {
        const successCB = function (data, status, xhr) {
            for (let i = 0; i < data.length; i++) {
                $("#subjectSelect").append(new Option(data[i].subject, data[i].subject));
            }
        }

        const errorCB = function (jqXhr, textStatus, errorMessag) {
            console.log(jqXhr);
            console.log(textStatus);
            console.log(errorMessag);
        }

        const options = {
            async: true,
            type: "GET",
            success: successCB,
            error: errorCB
        }
        $.ajax("/api/subjects", options)
    }
    getSubjectList();


    function refreshNoteListClickEventListener() {
        $("li button:not(:first)").click(function (event) {
            $("#createBtn").css("display", "none");
            $("#deleteBtn").css("display", "block");
            $("#saveBtn").css("display", "block");

            let note_id = event.currentTarget.id;
            const successCB = function (data, status, xhr) {
                $("#noteId").val(data[0].note_id);
                $("#noteTitle").val(data[0].title);
                $("#subjectSelect").val(data[0].subject);
                $("#languageSelect").val(data[0].language);
                $("#noteContent").val(data[0].content);

                $("#noteDetails")[0].scrollIntoView(true);


            }

            const errorCB = function (jqXhr, textStatus, errorMessag) {
                console.log(jqXhr);
                console.log(textStatus);
                console.log(errorMessag);
            }

            let options = {
                async: true,
                type: "GET",
                success: successCB,
                error: errorCB
            }
            $.ajax(`/notes/${note_id}`, options);
        });
    }
    refreshNoteListClickEventListener()

    $("#startNewNoteBtn").click(function () {
        $("#noteId").val("");
        $("#noteTitle").val("");
        $("#subjectSelect").val($("#subjectSelect option:first").val());
        $("#languageSelect").val($("#languageSelect option:first").val());
        $("#noteContent").val("");
        $("#createBtn").css("display", "block");
        $("#deleteBtn").css("display", "none");
        $("#saveBtn").css("display", "none");
    });

    $("#createBtn").click(function () {
        const successCB = function (data, status, xhr) {
            let html = ejs.render(
                `<li class="list-group-item">
                    <button class="btn btn-info" type="button" id="<%= options.note_id %>">
                        <h4 class="text-left"><%= options.title %></h4>
                        <p><%= options.content %></p>
                    </button>
                </li>`, { options: data[0] }

            )
            $("#noteList").append(html);
            $("#noteId").val(data[0].note_id);
            $("#createBtn").css("display", "none");
            $("#deleteBtn").css("display", "block");
            $("#saveBtn").css("display", "block");
            refreshNoteListClickEventListener();
        }

        const errorCB = function (jqXhr, textStatus, errorMessag) {
            console.log(jqXhr);
            console.log(textStatus);
            console.log(errorMessag);
        }

        let dataObject = {
            title: $("#noteTitle").val(),
            subject: $("#subjectSelect").val(),
            language: $("#languageSelect").val(),
            content: $("#noteContent").val()
        }

        let options = {
            async: true,
            type: "POST",
            data: dataObject,
            success: successCB,
            error: errorCB
        }
        $.ajax(`/notes`, options);
    });

    $("#deleteBtn").click(function () {
        let note_id = $("#noteId").val();
        const successCB = function (data, status, xhr) {
            let element = $(`#${data}`).parent();
            element.remove();
            $("#noteId").val("");
            $("#noteTitle").val("");
            $("#subjectSelect").val($("#subjectSelect option:first").val());
            $("#languageSelect").val($("#languageSelect option:first").val());
            $("#noteContent").val("");
            $("#createBtn").css("display", "block");
            $("#deleteBtn").css("display", "none");
            $("#saveBtn").css("display", "none");
        }

        const errorCB = function (jqXhr, textStatus, errorMessag) {
            console.log(jqXhr);
            console.log(textStatus);
            console.log(errorMessag);
        }

        const dataObject = {
            note_id: $("#noteId").val()
        }

        let options = {
            async: true,
            type: "DELETE",
            data: dataObject,
            success: successCB,
            error: errorCB
        }
        $.ajax(`/notes/${note_id}`, options);
    });

    $("#saveBtn").click(function () {
        const successCB = function (data, status, xhr) {
            $("#noteId").val(data[0].note_id);
            $("#noteTitle").val(data[0].title);
            $("#subjectSelect").val(data[0].subject);
            $("#languageSelect").val(data[0].language);
            $("#noteContent").val(data[0].content);
            $(`#${note_id} h4`).text(data[0].title);
            $(`#${note_id} p`).text(data[0].content);
        }

        const errorCB = function (jqXhr, textStatus, errorMessag) {
            console.log(jqXhr);
            console.log(textStatus);
            console.log(errorMessag);
        }

        let dataObject = {
            note_id: $("#noteId").val(),
            title: $("#noteTitle").val(),
            subject: $("#subjectSelect").val(),
            language: $("#languageSelect").val(),
            content: $("#noteContent").val()
        }

        let options = {
            async: true,
            type: "PUT",
            data: dataObject,
            success: successCB,
            error: errorCB
        }
        let note_id = $("#noteId").val();
        $.ajax(`/notes/${note_id}`, options);
    });

});
