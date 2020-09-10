$(document).ready(function () {
    $("#button2").click(function () {
        $("#form").toggle()
    });
    $("#personal").click(function () {
        $("form#personalDetails").toggle();

    });
    $("#signs").click(function () {
        $("form#symptoms").toggle();
    });

});




