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
});