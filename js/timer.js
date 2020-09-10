var set=0;
ver=parseInt(navigator.appVersion);
ie4=(ver>3 && navigator.appName!="Netscape")?1:0;
function play()
{
if (ie4)
document.all['BGSOUND_ID'].src="Messenger notification tone.mp3";
}
function setv()
{
var hr2
= document.getElementById('hour2').value;
var min2
= document.getElementById('min2').value;
var sec2
= document.getElementById('sec2').value;
if(hr2<10)
hr2='0'+hr2;
if(min2<10)min2='0'+min2;
if(sec2<10)sec2='0'+sec2;
document.getElementById('d2').value=hr2+'*'+min2+'*'+sec2;
set=1;
document.getElementById('msg').innerHTML='Reminder is ON';
}
function dis()
{
var dat= new Date();
var hr=dat.getHours();
var min=dat.getMinutes();
var sec=dat.getSeconds();
if(hr<10)hr='0'+hr;
if(min<10)min='0'+min;
if(sec<10)
sec='0'+sec;
document.getElementById('hour').value=hr;
document.getElementById('min').value=min;
document.getElementById('sec').value=sec;
var dat2v=document.getElementById('d2').value;
var dats =hr+'*'+min+'*'+sec;
if(dat2v==dats && set)
{play();swal("TIME TO SANITIZE");
set=0;
document.getElementById('msg').innerHTML='Reminder is OFF';
}
setTimeout("dis()",500);
}
function prtsel(x)
{
for(var i=0;i<x;i++)document.write("<option value="+i+">"+i+"</option>");
}