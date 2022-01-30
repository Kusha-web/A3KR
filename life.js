var fachead=document.querySelector('#head1');
var stdhead=document.querySelector('#head2');
var facbutt=document.querySelector('#faclog');
var stdbutt=document.querySelector('#stdlog');
var facht=document.querySelector('#fac');
var stdht=document.querySelector('#std');
function facin(){
    fachead.style.display="block";
    stdhead.style.display="none";
    facbutt.style.display="none";
    stdbutt.style.display="block";
    facht.style.display="block";
    stdht.style.display="none";
}
function stdin(){
    fachead.style.display="none";
    stdhead.style.display="block";
    facbutt.style.display="block";
    stdbutt.style.display="none";
    facht.style.display="none";
    stdht.style.display="block";
}