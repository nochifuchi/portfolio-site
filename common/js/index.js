//loading
$(function() {
  $('#main-visual').addClass('show');
});

//fade contents
$(function() {
  $(window).scroll(function() {
    $('.js-fade').each(function() {
      var conPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowH = $(window).height();
      if ( scroll > conPos - windowH + 200 ) {
        $(this).addClass('show');
      }
    });
  });
});

//navbar
$(function() {
  let navbar = $('.navbar');
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll > 0) {
      navbar.addClass('show');
    } else {
      navbar.removeClass('show');
    }
  });
});

//sp-g-nav
$(function() {
  var navTrg = $('.nav-trigger');
  var nav = $('.sp-g-nav nav');
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