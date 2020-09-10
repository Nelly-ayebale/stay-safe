function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

const btn = document.querySelector('#button2');
btn.addEventListener('click', (event) => {
    alert(getSelectedCheckboxValues('check'));
});

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
    $("#to-day").click(function () {
        $("form#today").toggle()
    });
    $("#next").click(function () {
        $("form#next-days").toggle();

    });


});





