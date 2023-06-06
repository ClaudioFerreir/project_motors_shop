$(document).ready(function() {
  console.log('main.js loaded');

  $('#carousel-imagens').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });

  $('.menu-hamburguer').click(function() {
    $('nav').slideToggle();
  })


  //movimentação do scroll mudança de cor do header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }
  })

  //mascara do telefone
  $('#telefone').mask('(00) 00000-0000')

  //validação do formulário (plugin jquery validate)
  //trabalha com os names e não com os ids
  $('form').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      mensagem: {
        required: true
      },
      veiculoDeInteresse: {
        required: false
      }
    },
    messages: {
      nome: 'Por favor, preencha o seu nome',
      email: 'Por favor, preencha o seu e-mail',
      telefone: 'Por favor, preencha o seu telefone',
      mensagem: 'Por favor, preencha a sua mensagem'
    },
    submitHandler: function(form) {
      console.log(form);
    },
    invalidHandler: function(event, validator) {
      let errors = validator.numberOfInvalids();
      if (errors) {
        alert(`Existem ${errors} erros no formulário`)
      }
    }
  })

});