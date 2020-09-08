$(document).ready(function(){
    $('#button2').click(function () {
        if (!$('#customCheck1').is(':checked')) {
            alert('not checked');
            return false;
        }else{
            alert("checked");
        }
    });
    $('#button2').click(function () {
        if (!$('#customCheck2').is(':checked')) {
            alert('not checked');
            return false;
        }else{
            alert("checked");
        }
    });
    $('#button2').click(function () {
        if (!$('#customCheck3').is(':checked')) {
            alert('not checked');
            return false;
        }else{
            alert("checked");
        }
    });
    
})