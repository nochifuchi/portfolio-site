//loading
$(function(){
  $('.js-fade').addClass('show');
});

//Global Nav
$(function() {
  var navTrg = $('.nav-trigger');
  var nav = $('.global-nav');
  var app = $('#app');

  var closeNav = function() {
    navTrg.removeClass('active');
    nav.removeClass('active');
  }

  var openNav = function() {
    navTrg.addClass('active');
    nav.addClass('active');
  }

  navTrg.click(function(){
    if ( navTrg.hasClass('active') && nav.hasClass('active') ) {
      closeNav();
    } else {
      openNav();
    }
    return false;
  });

  //グローバルナビ以外をクリックしたらナビを閉じる
  app.click(function() {
    if ( navTrg.hasClass('active') && nav.hasClass('active') ) {
      closeNav();
    }
  });

  //アンカーリンクをクリックしたらナビを閉じる
  $('a[href^="#"]').click(function(){
    if ( navTrg.hasClass('active') && nav.hasClass('active') ) {
      closeNav();
    }
  })

});

//anchor scroll
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});