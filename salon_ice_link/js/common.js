(function ( $ ) {
  $.fn.jsTabs = function() {

    var current = $(this);
    var tab = $(this).children().eq(0).find('a');

    $(this).children().eq(1).children().css('display', 'none');

    /* checking first tab */
    function firstTab() {
      var hasActive = false;
      tab.each(function(i){
        if($(this).hasClass('is-active')) {
					hasActive = true;
					showing($(this).attr('href'));
					return
        } 
      });
      if(!hasActive) {
				tab.eq(0).addClass('is-active');
				showing(tab.eq(0).attr('href'));
      }
    }

    firstTab();
    
    function showing(target) {
      current.children().eq(1).children().css('display', 'none');
      current.children().eq(1).find(target).css('display', 'block');
    }

    tab.on('click', function(e){
      e.preventDefault();
      tab.removeClass('is-active');
      $(e.target).addClass('is-active');
      var target = $(e.target).attr('href');
      showing(target);
    });

  };
})(jQuery);

$(document).ready(function() {

  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    var IE = true;
  } else {
    var IE = false;
  }

  svg4everybody();

  $('.js-tabs').each(function(){
    $(this).jsTabs();
  });

  if (!IE) {
    $('.b-header').parallax({
      src: 'img/header-bg.jpg',
      speed: 0.3,
      afterRender: function() {
        $('.b-header').css('background-image', 'none');
      }
    });
  } else {
    $('.b-header').css('background-image', 'url(img/header-bg.jpg)');
  }
  
  $('.b-menu__link, .b-mouse').on('click', function(e){
    e.preventDefault();
    $('.btn--menu').trigger('click');
    var target = $(this).attr('href');
    if ($(target).length > 0) {
      TweenLite.to(window, 1, {scrollTo: {y: target, autoKill: false}});
    }
  })

  $('.b-catalog__list').on('click', 'a', function(e){
    e.preventDefault();
    var $target = $($(this).attr('href'));
    $(this).siblings().removeClass('is-active').end().addClass('is-active');
    if($target.length > 0) {
      $('.b-gallery__slider-wrap').removeClass('is-active');
      $target.addClass('is-active');
      $('.b-gallery__slider-wrap').removeClass('is-active');
      $target.addClass('is-active');
    }
  })

  $('.b-collapse-item__title').on('click', function(){
    $(this).parent().toggleClass('is-open');
  });

  $('.btn--menu').on('click', function(e){
    e.preventDefault();
    var $this = $(this);
    var $menu = $('.b-menu');
    if($menu.hasClass('is-open')) {
      $this.removeClass('is-open is-dark');
      $menu.removeClass('is-open')
      $(document).off('click.menu');
    } else {
      $this.addClass('is-open is-dark');
      $menu.addClass('is-open');
      var firstClick = true;
      $(document).on('click.menu', function(e) {
        if (!firstClick && $(e.target).closest('.b-menu').length == 0) {
          $menu.removeClass('is-open');
          $this.removeClass('is-open is-dark');
          $(document).off('click.menu');
        }
      firstClick = false;
      });
    }
  });

  (function(){
    var swiper;
    enquire.register('screen and (min-width: 768px)', {
      setup: function(){
        if (swiper) swiper.destroy(true, true);
        var $this = $('.b-team__slider');
        var $next = $this.find('.b-slider__next');
        var $prev = $this.find('.b-slider__prev');
        swiper = new Swiper($this, {
          navigation: {
            nextEl: $next,
            prevEl: $prev
          },
          loop: true,
          slidesPerView: 1,
          slideToClickedSlide: true,
          speed: 400,
          centeredSlides: true,
        });
      },
      match: function() {
        if (swiper) swiper.destroy();
        var $this = $('.b-team__slider');
        var $next = $this.find('.b-slider__next');
        var $prev = $this.find('.b-slider__prev');
        swiper = new Swiper($this, {
          effect: 'coverflow',
          coverflowEffect: {
            rotate: 0,
            stretch: -25,
            depth: 150,
            modifier: 3,
            spaceBetween: 0,
            slideShadows: false,
          },
          navigation: {
            nextEl: $next,
            prevEl: $prev
          },
          loop: true,
          slidesPerView: 'auto',
          slideToClickedSlide: true,
          touchEventsTarget: 'wrapper',
          speed: 700,
          centeredSlides: true,
          on: {
            progress: function (progress) {
              for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i);
                var slideProgress = slide[0].progress;
                slideOpacity = 2 - Math.abs(slideProgress);
                slideOpacity = Math.min(Math.max(slideOpacity, 0), 1);
                slide[0].style.opacity = slideOpacity;
              }
            },
            slideChangeTransitionEnd: function() {
              this.loopFix();
            }
          },
        });

        if(swiper) {
          swiper.slideTo(swiper.slides.length/2, 0);
        }
      },
      unmatch: function() {
        if (swiper) swiper.destroy(true, true);
        var $this = $('.b-team__slider');
        var $next = $this.find('.b-slider__next');
        var $prev = $this.find('.b-slider__prev');
        swiper = new Swiper($this, {
          navigation: {
            nextEl: $next,
            prevEl: $prev
          },
          loop: true,
          slidesPerView: 1,
          slideToClickedSlide: true,
          speed: 400,
          centeredSlides: true,
        });
      }
    });
  })();

  $('.b-gallery__slider').each(function(){
    var $this = $(this);
    var $scroll = $this.parent().find('.swiper-scrollbar');
    var swiper = new Swiper($this, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      observeParents: true,
      observer: true,
      scrollbar: {
        el: $scroll,
        hide: false,
        draggable: true
      },
      mousewheel: true,
      breakpoints: {
        767: {
          mousewheel: false,
          freeMode: true,
        }
      }
    });
  });

  $('.b-gallery__slider').on('scroll', function(e){
    e.preventDefault();
  })

  $('.js-iframe').on('click', function(e){
    e.preventDefault();
    var $target = $('.b-video-responces__item.is-main');
    var src = $(this).attr('href');
    var $iframe = $target.find('iframe');
    if ($iframe.length > 0) {
      $iframe.attr('src', src);
    } else {
      $target.append('<iframe src=' + src +'></iframe>');
      $target.addClass('hide-bg');
    }
  })

  $('.js-video').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-zoom-in',
    removalDelay: 400,
    autoFocusLast: false
  });

  $('.b-gallery__slider').each(function(){
    $(this).magnificPopup({
      type: 'image',
      delegate: '.b-gallery__item',
      gallery: {
        enabled: true,
        tPrev: '',
        tNext: '',
        tCounter: '%curr% из %total%',
        arrowMarkup: '<button type="button" class="mfp-arrow mfp-arrow-%dir%"><svg class="svg" width="30" height="30"><use xlink:href="img/sprite.svg#arrow-%dir%"></use></svg></button>',
      },
      closeOnContentClick: true,
      removalDelay: 300,
      tLoading: "",
      mainClass: 'mfp-zoom-in-gallery',
      autoFocusLast: false,
      callbacks: {
        elementParse: function(item) {
          // the class name
          if($(item.el).hasClass('is-video')) {
            item.type = 'iframe';
          } else {
            item.type = 'image';
          }
        },
        imageLoadComplete: function() {
          var self = this;
          setTimeout(function() {
            self.wrap.addClass('mfp-image-loaded');
          }, 16);
        },
        close: function() {
          this.wrap.removeClass('mfp-image-loaded');
        },
        open: function() {
          $.magnificPopup.instance.next = function() {
              var self = this;
              self.wrap.removeClass('mfp-image-loaded');
              setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
          }
          $.magnificPopup.instance.prev = function() {
              var self = this;
              self.wrap.removeClass('mfp-image-loaded');
              setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
          }
        },
        imageLoadComplete: function() { 
            var self = this;
            setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
        }
      },
    });
  });

  $('.mask-phone').each(function(){
    $(this).mask('+38 999-999-99-99');
  });

  $('a, img').on('dragstart', function(e){
    e.preventDefault();
  });

  jQuery.validator.setDefaults({

    errorElement: 'div',
    wrapper: 'div',

    onfocusout: function(element) {
      if (!this.checkable(element) && element.name in this.submitted) {
        this.element(element);
      }
    },

    errorPlacement: function(error, element) {
      var $parent = $(element).parent();
      error.insertAfter($parent);
      error.addClass('b-field__error');
      setTimeout(function(){
        $parent.parent().addClass('has-error');
      }, 100);
    },

  });

  $('.b-field').on('change', 'input', function(){
    $(this).closest('.b-field').removeClass('has-error');
  })

  $('.b-field').on('click', '.b-field__error', function(){
    $(this).hide();
  })

  $('.b-callback-form, .js-form').each(function(){
    var $this = $(this);
    $this.validate({
      onkeyup: false,
      onclick: false,
      rules: {
        Имя: {
          required: true,
        },
        Телефон: {
          required: true,
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
          url: "mail.php",
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
          $this.trigger("reset");
          ga('send', 'event', 'form', 'submit');
	  fbq('track', 'Lead');

        });
        return false
      },
    });
  });	
  
});

function sliderMarkupInit($container) {
  $parent = $container.parent();
  $container.detach();
  $container.children().each(function(){
    $(this).wrap('<div class="swiper-slide"></div>');
  })
  $container.wrapInner('<div class="swiper-wrapper"></div>');
  $parent.append($container);
}

function sliderMarkupDestroy($container) {
  $parent = $container.parent();
  $container.detach();
  $container.children().children().first().unwrap();
  $container.children().each(function(){
    $(this).children().unwrap();
  })
  $parent.append($container);
}

$(window).load(function(){

  (function() {

    var packery = $('.b-responces__list').packery({
      itemSelector: 'img',
      gutter: 25
    });

    if ($('.b-responces__list').length > 0) {
      
      var sliderAdvantages
      enquire.register('screen and (max-width: 1350px)', {
        match: function() {
          var tempList = $('.b-responces__list');
          sliderMarkupInit(tempList);
          packery.packery('destroy');
          tempList.each(function(){
            sliderAdvantages = new Swiper($(this), {
              slidesPerView: 'auto',
              freeMode: true,
              spaceBetween: 15,
            })
          });
        },
        unmatch: function() {
          sliderAdvantages.destroy(true, true);
          sliderMarkupDestroy($('.b-responces__list'));
          packery = $('.b-responces__list').packery({
            itemSelector: 'img',
            gutter: 25
          });
        }
      });
    }
  })();

  $('.b-preloader').removeClass('is-show');
})



