$(document).ready(function () {

    $(window).resize(function () {
        let widthValue = $(this).width();
        if (widthValue <= 768) {
            $("#sideBar").hide();
        }
        else {
            $("#sideBar").show();
        }
    });
});