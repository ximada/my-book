

//efeto maquina de escribir

var mensage1 = "Ada Valdovinos.", pausa = 50; 
var mensage2 = "Front End Developer", pausa = 50; 
function start(){ 
 var i = 0;
 var m = mensage1.split(''); 
 var t = setInterval( 
 function(){ 
 if(i >= m.length-1)clearInterval(t); 
 document.getElementById('efect', ).innerHTML+=m[i];
 i++; 
 }, pausa); 
} 
start(); 
function secondText(){ 
    var i = 0;
    var m = mensage2.split(''); 
    var t = setInterval( 
    function(){ 
    if(i >= m.length-1)clearInterval(t); 
    document.getElementById('efect2', ).innerHTML+=m[i];
    i++; 
    }, pausa); 
   } 
   secondText();

//menu hamburgesa
$('.hamburger').click(function () {
    $('.hamburger').toggleClass('open');
});


