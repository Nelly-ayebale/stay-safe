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
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
};

function refreshPage(){
    window.location.reload();
} 
