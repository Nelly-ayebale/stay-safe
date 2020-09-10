const guides = document.querySelector(".guides");
const accountDetails = document.querySelector(".accountdetail");



const setupUi = (user) => {
    if(user){
    const html = `
        <div>logged in as ${user.email}</div>
    `;
    accountDetails.innerHTML = html;
    }else{
    accountDetails.innerHTML = '';
    }
}


$(document).ready(function(){
    $("#days").click(function(){
        $(".days").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#list").click(function(){
        $(".list").slideToggle("slow");
    });
});

$(document).ready(function() {
    $("#settingsbutton").click(function() {
        $(".settingform").toggle("slow");
        $(".settingsform").toggle("slow");
    });
});



