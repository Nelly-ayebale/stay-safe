$(document).ready(function () {
    $("#personal").click(function () {
        $("form#personalDetails").toggle();

    });
    $("#signs").click(function () {
        $("form#symptoms").toggle();
    });

})