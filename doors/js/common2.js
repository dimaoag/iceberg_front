'use strict';

svg4everybody();

function scrollToDiv(element, navheight){
  if (typeof element === 'undefined') return undefined;
  var offset = element.offset();
  var offsetTop = offset.top;
  var totalScroll = offsetTop-navheight;
  var speed = 700;
  if(totalScroll < 1000) speed = 500;

  $('body,html').animate({
    scrollTop: totalScroll
  }, speed);
}

function createSwiperNav(target, arrows, pagination) {
  if (typeof target === 'object') {
    var slider = target
  } else {
    var slider = document.querySelector(target);
  }
  if (arrows || pagination) {
    var nav = document.createElement('div');
    nav.className = 'b-slider__nav';
  }

  if (arrows) {
    var arrowPrev = document.createElement('div');
    arrowPrev.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="34" viewBox="0 0 252.1 477.2"><path d="M3.9 248.1L229 473.2a13.2 13.2 0 0 0 9.5 4 13.6 13.6 0 0 0 9.5-23.1L32.5 238.6 248 23.1A13.506 13.506 0 0 0 228.9 4L3.8 229.1a13.4 13.4 0 0 0 .1 19z"/></svg>';
    arrowPrev.className = 'b-slider__prev';

    var arrowNext = document.createElement('div');
    arrowNext.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="34" viewBox="0 0 252.1 477.2"><path d="M248.1 229.1L23 4A13.506 13.506 0 1 0 3.9 23.1l215.5 215.5L3.9 454.1a13.6 13.6 0 0 0 9.5 23.1 13.2 13.2 0 0 0 9.5-4L248 248.1a13.4 13.4 0 0 0 .1-19z"/></svg>';
    arrowNext.className = 'b-slider__next';

    nav.appendChild(arrowPrev);
    nav.appendChild(arrowNext);
  }

  if (pagination) {
    var pagination = document.createElement('div');
    pagination.className = 'b-slider__pagination';

    nav.appendChild(pagination);
  }
  if (arrows || pagination) {
    slider.appendChild(nav);
  }
}

$(document).ready(function(){
  
  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    var IE = true;
  } else {
    var IE = false;
  }

  if (!IE) {
    $('.b-header').parallax({
      src: 'img/header-bg.jpg',
      speed: 0.3,
      afterRender: function() {
        $('.b-header').css('background-image', 'none');
      }
    });
    $('.b-contract').parallax({
      src: 'img/contract-bg.jpg',
      speed: 0.3,
      afterRender: function() {
        $('.b-contract').css('background-image', 'none');
      }
    });
    $('.b-special').parallax({
      src: 'img/special-bg.jpg',
      speed: 0.3,
      afterRender: function() {
        $('.b-special').css('background-image', 'none');
      }
    });
  }

  if ($(window).outerWidth() > 1000) {
    new Waypoint({
      element: $('.b-services__list')[0],
      handler: function(direction) {
        $('.b-services__list').find('.b-service').each(function(i){
          $(this).css('animation-delay', i * 0.3 + 's').addClass('animated zoomIn');
        });
        this.destroy();
      },
      offset: '100%'
    });

    new Waypoint({
      element: $('.b-adv')[0],
      handler: function(direction) {
        $('.b-adv__title').each(function(){
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
              $(this).text(Math.ceil(now))
            }
          })
        });
        this.destroy();
      },
      offset: '100%'
    });
  }
  
  $('.b-menu__link, .js-scroll').on('click', function(e){
    e.preventDefault();
    var el = $(this).attr('href');
    var elWrapped = $(el);
    scrollToDiv(elWrapped, 0);
  });

  $('.b-catalog__list').each(function(){
    createSwiperNav(this, true);
    var $parent = $(this);
    var $next = $parent.find('.b-slider__next');
    var $prev = $parent.find('.b-slider__prev');
    var swiper = new Swiper(this.firstElementChild, {
      slidesPerView: 4,
      loop: true,
      speed: 600,
      spaceBetween: 50,
      navigation: {
        nextEl: $next,
        prevEl: $prev
      },
      breakpoints: {
        1700: {
          spaceBetween: 20
        },
        959: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        479: {
          slidesPerView: 1,
          spaceBetween: 20,
        }
      },
    });
  });

  $('.b-responses__list').each(function(){
    createSwiperNav(this, true, true);
    var $parent = $(this);
    var $next = $parent.find('.b-slider__next');
    var $prev = $parent.find('.b-slider__prev');
    var $pagination = $parent.find('.b-slider__pagination');
    var swiper = new Swiper(this.firstElementChild, {
      slidesPerView: 3,
      loop: true,
      speed: 600,
      navigation: {
        nextEl: $next,
        prevEl: $prev
      },
      pagination: {
        el: $pagination,
        clickable: true
      },
      breakpoints: {
        767: {
          slidesPerView: 2
        },
        479: {
          slidesPerView: 1
        }
      }
    });
  });

  $('a, img').on('dragstart', function(e){
    e.preventDefault();
  });

  $('.js-btn').on('click', function(e){
    e.preventDefault();
    var $this = $(this);
    $.magnificPopup.open({
      items: {
        src: $this.attr('href')
      },
      type: 'inline',
      removalDelay: 400,
      mainClass: 'mfp-zoom-in',
      autoFocusLast: false
    })
  });

  $('.js-iframe').on('click', function(e){
    e.preventDefault();
    var $target = $(this);
    var src = $(this).attr('href');
    var $iframe = $target.find('iframe');
    if ($iframe.length > 0) {
      $iframe.attr('src', src);
    } else {
      $target.append('<iframe src=' + src +'></iframe>');
      $target.addClass('hide-bg');
    }
  });

  $('.js-img').on('click', function(e) {
    e.preventDefault();
  }).magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    removalDelay: 300,
    tLoading: "",
    mainClass: 'mfp-zoom-in',
    autoFocusLast: false,
    callbacks: {
      imageLoadComplete: function() {
        var self = this;
        setTimeout(function() {
          self.wrap.addClass('mfp-image-loaded');
        }, 16);
      },
      close: function() {
        this.wrap.removeClass('mfp-image-loaded');
      },
    },
  });
  
  $.validator.addMethod("myphone", function (phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element) || phone_number.length > 9 && /^[0-9,+,-]+$/.test(phone_number);
  },	"Неверный формат телефона");

  jQuery.validator.setDefaults({

    errorElement: 'div',
    wrapper: 'div',

    onfocusout: function(element) {
      if (!this.checkable(element) && element.name in this.submitted) {
        this.element(element);
      }
    },

    errorPlacement: function(error, element) {
      $(element).closest('.b-field').append(error);
      //$(element).closest('.b-field').addClass('has-error');
      error.addClass('b-field__error');
    },

  });

  $('.js-form').each(function(){
    var $this = $(this);
    $this.validate({
      highlight: function(element) {
        setTimeout(function(){
          $(element).closest('.b-field').addClass('has-error');
        }, 100)
      },
      unhighlight: function(element) {
        $(element).closest('.b-field').removeClass('has-error');
      },
      onkeyup: false,
      onclick: false,
      rules: {
        Имя: {
          required: true,
        },
        Телефон: {
          required: true,
          myphone: true
        },
      },
      messages: {
        Имя: {
          required: "Введите имя",
        },
        Телефон: {
          required: "Введите номер телефона"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "mail2.php",
          data: $(form).serialize()
        }).done(function() {
          $.magnificPopup.open({
            items: {
              src: '#popup-thanks'
            },
            type: 'inline',
            mainClass: 'mfp-zoom-in',
            removalDelay: 400,
            autoFocusLast: false
          });
          ga('send', 'event', 'catalog', 'send');
          $this.trigger("reset");
        });
        return false;
      },
    });
  });	
});