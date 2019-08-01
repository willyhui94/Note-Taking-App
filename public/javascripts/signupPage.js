$(document).ready(function() {

    $("input").keyup(function() {
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let emailAddress = $("#emailAddress").val();
        let password = $("#password").val();
        let passwordConfirm = $("#passwordConfirm").val();
        
        if (
            firstName === "" || 
            lastName === "" || 
            emailAddress === "" || 
            password === "" || 
            passwordConfirm === "" 
        ) {
            $("#submitBtn").prop("disabled", true);
        }
        else {
            $("#submitBtn").removeAttr("disabled");
        }

    });

    $("#password, #passwordConfirm").keyup(function() {
        let password = $("#password").val();
        let passwordConfirm = $("#passwordConfirm").val();
        if (password !== passwordConfirm) {
            $("#passwordAlert").show();
            $("#submitBtn").prop("disabled", true);
        }
        else {
            $("#passwordAlert").hide();
            $("#submitBtn").removeAttr("disabled");
        }
    });

});