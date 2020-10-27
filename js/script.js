let bg = document.querySelector('.bg').offsetHeight,
    header = document.querySelector('.header');
    // navLinks = document.querySelectorAll('.header-wrapper__link'),
    // lineLogo = document.querySelector('.colorLogo');


 window.addEventListener('scroll', () => {
  if(scrollY > bg){
    header.style.background = '#0BAFC2';
    header.style.boxShadow = '0 2px 15px 0 rgba(0,0,0,0.1)';
    header.style.transition = '0.4s';
    // lineLogo.style.color = '#000';
    // navLinks.forEach(item => {
    //   item.style.color = '#000';
    // });
  }else{
    header.style.background = 'transparent';
    header.style.boxShadow = '0 2px 15px 0 rgba(0,0,0,0)';
    header.style.transition = '0.4s';
    // lineLogo.style.color = '#fff';
    // navLinks.forEach(item => {
    //   item.style.color = '#fff';
    // });
  }
 });

//  $(window).on('scroll', function() {
// 	var scrollCoef = 0.0015;

// 	$('.banner-wrapper__content').css({
// 		opacity: 1 - $(window).scrollTop() * scrollCoef
// 	})
// });

//  window.addEventListener('contextmenu', (e) =>{
//     e.preventDefault();
//  });

// AOS/JS
AOS.init();

// maskInput
$("#phone").mask("+7(999) 999-99-99");


$('.header-wrapper__icon-burger').click(function () {
  $('.header-wrapper__burger').css('right', 0)
});

$('.header-wrapper__icon-close').click(function () {
  $('.header-wrapper__burger').css('right', - 1000)
});



    
    // whatsapp my link
let whatsApp = document.querySelector('.whatsApp--link'),
    whatsApp2 = document.querySelector('.whatsApp--link2');

window.addEventListener('scroll', () => {
  if(scrollY > bg){
    whatsApp.style.right = 15 + 'px';
    whatsApp2.style.right = 15 + 'px';
    whatsApp2.style.display = 'block';
    // header2.style.top = 0;
  }else{
    whatsApp.style.right = -1000 + 'px';
    whatsApp2.style.right = -1000 + 'px';
    // header2.style.top = -1000 + 'px';
  }
});


  
// accrodreon
$(document).ready( () => {
  $('.questions-wrapper__headline').click(function(e) {
    e.preventDefault();
    let $this = $(this);
    $($this).find('.questions-wrapper__icon').toggleClass('icon--color');
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('questions-wrapper__hide').removeClass('show');
        $this.parent().parent().find('questions-wrapper__hide').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
  });
});

// -------------------------------------------------------
// Плавный скрол к якорю v2 START
// -------------------------------------------------------

$(document).ready( () => {
  jQuery(document).ready(function() {
    jQuery(window).bind("load", function() {
      //Пример исключения ссылки:
      //jQuery('a[href*="#"]:not([href="#"],[href="#spu-209"],[href="#spu-211"],[href="#spu-212"],[href="#spu-213"],[href="#spu-214"],[href="#spu-215"],[href="#spu-217"])').click(function() {
      jQuery('a:not(.spu-clickable)[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
          location.hostname == this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            jQuery("html, body").animate({
              // $('html, body').animate({
              scrollTop: target.offset().top - 50
            }, 1000);
            return false;
          }
        }
      });
    });
  });
});
// -------------------------------------------------------
// Плавный скрол к якорю v2 END
// -------------------------------------------------------




// pagespeed 2.1v
function rocketCSS(e) {
  var t = new XMLHttpRequest;
  t.onreadystatechange = function(){
      if(4==t.readyState && 200==t.status){
          var e = document.head||document.getElementsByTagName("head")[0];
          var n = document.createElement("style");
          n.type = "text/css";
          n.styleSheet
              ? n.styleSheet.cssText = t.responseText
              : n.appendChild(document.createTextNode(t.responseText));
          e.appendChild(n);
      }
  };
  t.open("GET",e,!0);
  t.send();
}

rocketCSS('/style.css');



   
    


 