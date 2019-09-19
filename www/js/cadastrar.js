$(function(){
  $('#entrar').click(function(){
     $(location).attr('href', 'eventos.html');
  });

});

 $(function(){
  $('#cadastrar').click(function(){
     $(location).attr('href', 'index.html');
  });
});

function abrirmenu() {
  document.getElementById("mySidebar").style.display = "block";
}
function fechar() {
  document.getElementById("mySidebar").style.display = "none";
}
 


