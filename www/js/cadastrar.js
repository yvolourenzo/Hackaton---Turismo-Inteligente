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
 
$(function(){
  $('#entrar').click(function(){
     $(location).attr('href', 'eventos.html');
  });

});
function volta(){
  location.href = "pontos.html";
}

 $(function(){
  $('#cadastrar').click(function(){
     $(location).attr('href', 'index.html');
  });
});

$(function(){
  $('#b').click(function(){
     $(location).attr('href', 'belvedere.html');
  });
});
$(function(){
  $('#s').click(function(){
     $(location).attr('href', 'santa.html');
  });
});
$(function(){
  $('#p').click(function(){
     $(location).attr('href', 'praia.html');
  });
});
$(function(){
  $('#f').click(function(){
     $(location).attr('href', 'fazenda.html');
  });
});
$(function(){
  $('#i').click(function(){
     $(location).attr('href', 'igreja.html');
  });
});
$(function(){
  $('#p2').click(function(){
     $(location).attr('href', 'pocodasantas.html');
  });
});


function abrirmenu() {
  document.getElementById("mySidebar").style.display = "block";
}
function fechar() {
  document.getElementById("mySidebar").style.display = "none";
}

 
$('.vote label i.fa').on('click mouseover',function(){
    // remove classe ativa de todas as estrelas
    $('.vote label i.fa').removeClass('active');
    // pegar o valor do input da estrela clicada
    var val = $(this).prev('input').val();
    //percorrer todas as estrelas
    $('.vote label i.fa').each(function(){
        /* checar de o valor clicado é menor ou igual do input atual
        *  se sim, adicionar classe active
        */
        var $input = $(this).prev('input');
        if($input.val() <= val){
            $(this).addClass('active');
        }
    });
    $("#voto").html(val); // somente para teste
});
//Ao sair da div vote
$('.vote').mouseleave(function(){
    //pegar o valor clicado
    var val = $(this).find('input:checked').val();
    //se nenhum foi clicado remover classe de todos
    if(val == undefined ){
        $('.vote label i.fa').removeClass('active');
    } else { 
        //percorrer todas as estrelas
        $('.vote label i.fa').each(function(){
            /* Testar o input atual do laço com o valor clicado
            *  se maior, remover classe, senão adicionar classe
            */
            var $input = $(this).prev('input');
            if($input.val() > val){
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        });
    }
    $("#voto").html(val); // somente para teste
});


