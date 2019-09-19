$(function(){
  $('#entrar').click(function(){

    if($('#login').val() == 'adm' && $('#senha').val() == '1234'){

     $(location).attr('href', 'eventos.html');

  }

    if($('#login').val() != 'adm' && $('#senha').val() == '1234'){

   alert('Login Incorreto');

  }
  if($('#login').val() == 'adm' && $('#senha').val() != '1234'){

   alert('Senha Incorreta');
  }
  if($('#login').val() != 'adm' && $('#senha').val() != '1234'){

alert('Login e Senha Incorretos');

  }
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
 


