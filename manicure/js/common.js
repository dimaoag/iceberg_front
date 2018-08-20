function scrollToDiv(element,navheight){
    var offset = element.offset();
    var offsetTop = offset.top;
    var totalScroll = offsetTop-navheight;
    var speed = 700;
    if(totalScroll < 1000) speed = 500;
 
    $('body,html').animate({
       scrollTop: totalScroll
    }, speed);
}

$(document).ready(function(){

	var magnificPopup = $.magnificPopup.instance;

	$('.js-scroll, .b-menu__link').on('click', function(e){
		e.preventDefault();
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped, 0);
	});

	$('#mask-phone').mask('+38 (999) 9999999');

	$('.b-menu__link').on('click', function(e){
		$('.b-menu__btn').trigger('click');
	})

	$('.b-menu__btn').on('click', function(e){
		e.preventDefault();
		var this_ = $(this);
		var menu = $('.b-menu');
		if(menu.hasClass('is-open')) {
			this_.removeClass('is-active');
			menu.removeClass('is-open')
			$(document).off('click.menu');
		} else {
			this_.addClass('is-active');
			menu.addClass('is-open');
			var firstClick = true;
			$(document).on('click.menu', function(e) {
				if (!firstClick && $(e.target).closest('.b-menu').length == 0) {
					menu.removeClass('is-open');
					this_.removeClass('is-active');
					$(document).off('click.menu');
				}
			firstClick = false;
			});
		}
	});

	$('.b-portfolio__slider').each(function(){
		var parent = $(this).parent();
		var next = parent.find('.b-slider__next');
		var prev = parent.find('.b-slider__prev');
		var sight = $(this).swiper({
			effect: 'coverflow',
			loop: true,
			loopAdditionalSlides: 10,
			coverflow: {
				rotate: 0,
				stretch: 55,
				depth: 80,
				modifier: 3,
				spaceBetween: 0,
				slideShadows: false,
			},
			nextButton: next,
			prevButton: prev,
			slidesPerView: 3,
			slideToClickedSlide: true,
			speed: 700,
			roundLengths: true,
			centeredSlides: true,
			breakpoints: {
				767: {
					effect: 'slide',
					slidesPerView: 2,
					slideToClickedSlide: false,
				},
				479: {
					effect: 'slide',
					slidesPerView: 1,
					slideToClickedSlide: false,
				}
			},
			 onProgress: function (s, progress) {
				for (var a = 0; a < s.slides.length; a++) {
					var slide = s.slides.eq(a);
					var slideProgress = slide[0].progress;

					slideOpacity = 4 - Math.abs(slideProgress);
					slideOpacity = Math.min(Math.max(slideOpacity, 0), 1);
					slide[0].style.opacity = slideOpacity;
				}
			}
		});

		if(sight) {
			sight.slideTo( sight.slides.length/2, 0);
		}

	});

	$('.b-teacher').on('click', function(e){
		if ($(e.target).hasClass('b-teachers__next')) {
			var this_ = $(e.target);
			var index = this_.parent().index();
			var container = this_.closest('.b-teachers__list');
			container.find('.b-teacher').addClass('is-collapsed');
			container.find('.b-teacher').eq(index + 1).removeClass('is-collapsed');
		} else if ($(e.target).hasClass('b-teachers__prev')) {
			var this_ = $(e.target);
			var index = this_.parent().index();
			var container = this_.closest('.b-teachers__list');
			container.find('.b-teacher').addClass('is-collapsed');
			container.find('.b-teacher').eq(index - 1).removeClass('is-collapsed');
		} else {
			var this_ = $(this);
			var container = this_.closest('.b-teachers__list');
			this_.siblings().addClass('is-collapsed').end().removeClass('is-collapsed');
		}
	})

	$('.b-responces__slider').each(function(){
		var parent = $(this).parent()
		var next = parent.find('.b-slider__next');
		var prev = parent.find('.b-slider__prev');
		var swiper = $(this).swiper({
			nextButton: next,
			effect: 'fade',
			fade: {
				crossFade: true,
			},
			prevButton: prev,
			slidesPerView: 1,
			speed: 800,
			spaceBetween: 0,
		});
	});

	$('.js-img').on('click', function(e) {
		e.preventDefault();
	}).magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		removalDelay: 300,
		tLoading: "",
		mainClass: 'mfp-zoom-in',
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

	$('.b-gallery__item.is-video').on('click', function(e) {
		e.preventDefault();
		$.magnificPopup.open({
			type: 'inline',
			items: {
				src: $('.popup-video'),
			},
			closeOnContentClick: true,
			removalDelay: 300,
			tLoading: "",
			mainClass: 'mfp-zoom-in',
			callbacks: {
				open: function(){
					$('.popup-video video')[0].play();
				},
				close: function(){
					$('.popup-video video')[0].pause();
				},
			}
		});
	});

	$('.b-gallery__item:not(.is-video)').on('click', function(e){
		e.preventDefault();
	}).magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			tPrev: '', // Alt text on left arrow
    		tNext: '', // Alt text on right arrow
			tCounter: '%curr% из %total%' // Markup for "1 of 7" counter
		},
		closeOnContentClick: true,
		removalDelay: 300,
		tLoading: "",
		mainClass: 'mfp-zoom-in-gallery',
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
                //overwrite default prev + next function. Add timeout for css3 crossfade animation
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

	$('.js-btn').on('click', function(e){
		e.preventDefault();
		var this_ = $(this);
		var parent = this_.closest('.b-course');
		if(parent.length > 0) {
			var popup = $('#popup-callback');

			var optionsInput = popup.find('input[name=Опции]');
			optionsInput.val('');
			optionsInput.attr('disabled', 'true');

			var name = parent.find('.b-course__header').text();
			popup.find('input[name=Курс]').val(name);

			if(parent.hasClass('js-course')){
				var options = "";
				var optionsCounter = 0;
				parent.find('.b-course__options').find('li.is-active').each(function(){
					options += $(this).text() + "; ";
					optionsCounter++;
				});
				if(options && optionsCounter > 2) {
					optionsInput.removeAttr('disabled');
					optionsInput.val(options);
				} else {
					parent.find('.b-course__error').show();
					return false;
				}
			};
		}
		parent.find('.b-course__error').hide();
		magnificPopup.open({
			items: {
				src: this_.attr('href')
			},
			type: 'inline',
			removalDelay: 400,
			mainClass: 'mfp-zoom-in',
		});

	})

	$('body').on('click', '.popup__close', function(e){
		e.preventDefault();
		magnificPopup.close();
	});


	(function(){
		var container = $('.js-course');
		var lessonsContainer = container.find('.b-course__lessons .title span');
		var durationContainer = container.find('.b-course__lessons .text span');
		var priceContainer = container.find('.b-course__price .text span');
		var lessonsCounter = 0;
		var durationCounter = 0;
		var priceCounter = 0;
		function changeInfo() {
			priceContainer.text(priceCounter);
			durationContainer.text(durationCounter);
			lessonsContainer.text(lessonsCounter);
		}
		$('.js-course .b-course__options').on('click', 'li', function(e){
			var this_ = $(this);
			var optionPrice = this_.data('price');
			var optionDuration = this_.data('days');
			var optionLessons = this_.data('lessons');
			if(this_.hasClass('is-active')) {
				this_.removeClass('is-active');
				priceCounter -= optionPrice;
				durationCounter -= optionDuration;
				lessonsCounter -= optionLessons;
			} else {
				this_.addClass('is-active');
				priceCounter += optionPrice
				durationCounter += optionDuration;
				lessonsCounter += optionLessons;
			}
			changeInfo();
		})
	})();

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	jQuery.validator.setDefaults({

		errorElement: 'div',
		wrapper: 'div',

		onfocusout: function(element) {
			if (!this.checkable(element) && element.name in this.submitted) {
				this.element(element);
			}
		},

		errorPlacement: function(error, element) {
			error.insertAfter(element)
			error.addClass('b-input__error');
		},
		
	});

	$('.popup-callback').each(function(){
		var this_ = $(this);
		this_.validate({
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
					magnificPopup.open({
						items: {
							src: '#popup-thanks'
						},
						type: 'inline'
					}),
					this_.trigger("reset");
				});
				return false;
			},
		});
	});

});