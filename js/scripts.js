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
};



function init() {
    var count=5;
    var counter=setInterval(timer,1000);
        function timer(){
        console.log('a')
            count=count-1;
            if(count==0){
                alert("Please remember to sanitize, wash your hands regularly, use facemask and keep social distance")
                    
                return;
            } 
        }
    }
    window.onclick = init;
    window.onresize = init;
    window.onload = init;
    window.onclick("#notify-me") = init;

