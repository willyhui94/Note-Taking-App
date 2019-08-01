$(document).ready(function() {

    $("#emailAddress, #password").keyup(function() {
        let emailAddress = $("#emailAddress").val();
        let password = $("#password").val();
        if (emailAddress === ""  || password === "") {
            $("#submitBtn").prop("disabled", true);
        }
        else {
            $("#submitBtn").prop("disabled", false);
        }
    });

});