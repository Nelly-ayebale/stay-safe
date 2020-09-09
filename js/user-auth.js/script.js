const guides = document.querySelector(".guides");

//setup guides
const setupGuides = (data) => {
  
    if(data.length) {
    let html = "";
    data.forEach(doc => {
     const guide = doc.data();
     const li = `
       <li>
       <div>${guide.title}</div>
       <div>${guide.content}</div>
       
       </li>
     `;

     html += li;
    });

    guides.innerHTML = html;

    }else{
    guides.innerHTML = `<h5 class="center-align">login to view guides</h5>`

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