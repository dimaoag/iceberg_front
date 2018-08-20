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

  $('.js-next-screen').on('click', function(e){
    e.preventDefault();
    $('#screen-1').addClass('is-hiding');
    setTimeout(function(){
      $('#screen-1').hide();
      $('#screen-2').css('display', 'block');
      setTimeout(function(){
        $('#screen-2').addClass('is-visible');
      }, 50)
    }, 1000)
  });

  $('.mask-phone').each(function(){
    $(this).mask('+7 (999) 999-99-99');
  });

  $('.js-rangeSlider').each(function(){
    var this_ = $(this);
    var parent = this_.closest('.b-rangeSlider');
    var input = parent.find('.b-counter input');
    this_.rangeslider({
      polyfill: false,
    }).on('input', function(){
      input.val(this_.val())
    });
    input.on('change', function(){
      this_.val(input.val()).change();
    })
  });

  $('.js-question').on('click', function(e){
    e.preventDefault();
    var this_ = $(this);
    var menu = $('.js-info');
    if(menu.hasClass('is-open')) {
      menu.removeClass('is-open')
      $(document).off('click.question');
    } else {
      menu.addClass('is-open');
      var firstClick = true;
      $(document).on('click.question', function(e) {
        if (!firstClick && ($(e.target).hasClass('js-info__close') || $(e.target).closest('.js-info').length == 0)) {
          menu.removeClass('is-open');
          $(document).off('click.question');
        }
      firstClick = false;
      });
    }
  });

  $('.b-input input').on('focusin', function(e){
    $(this).parent().addClass('is-focus');
  });

  $('.b-input input').on('focusout', function(e){
    $(this).parent().removeClass('is-focus');
  });

  $('input[name="cover_type"]').on('change', function(e) {
    var this_ = $(this);
    this_.parent().closest('.b-calc__step').find('.b-radioLevel').removeClass('is-visible');
    if (this_.prop('checked')) {
      this_.parent().closest('.b-radio__wrap').find('.b-radioLevel').addClass('is-visible');
    }
  });

  $('input[name="cover_type-1"]').on('change', function(e) {
    var this_ = $(this);
    var input = $(this).closest('.b-radio__wrap').find('.js-radio');
    input.val('Профлист-' + this_.val());
    input.trigger('click');
  });

  $('input[name="cover_type-2"]').on('change', function(e) {
    var this_ = $(this);
    var input = $(this).closest('.b-radio__wrap').find('.js-radio');
    input.val('Обрешотка-' + this_.val());
    input.trigger('click');
  });

  (function(){

    var prices = {
      "1500": {
        "3000": { 
          "base" : "28000",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "2625", "Профлист-2" : "5000", "Обрешотка-20x20" : "3500", "Обрешотка-40x20" : "6000","Евроштакетник" : "3495", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "16000", "CAME" : "20500", "FAAC" : "22500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "18000", "Бетонируемый фундамент" : "22000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "3500": { 
          "base" : "28500",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "2830", "Профлист-2" : "5660", "Обрешотка-20x20" : "4000", "Обрешотка-40x20" : "6500", "Евроштакетник" : "3805", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "16500", "CAME" : "21000", "FAAC" : "23000", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "19000", "Бетонируемый фундамент" : "22000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "4000": { 
          "base" : "29000",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "3000", "Профлист-2" : "6000", "Обрешотка-20x20" : "6500", "Обрешотка-40x20" : "7500", "Евроштакетник" : "4600", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "16500", "CAME" : "21000", "FAAC" : "23000", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "20000", "Бетонируемый фундамент" : "22000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "4500": { 
          "base" : "29500",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "3180", "Профлист-2" : "6360", "Обрешотка-20x20" : "7500", "Обрешотка-40x20" : "8500", "Евроштакетник" : "4470", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "19873", "CAME" : "21500", "FAAC" : "23500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "21000", "Бетонируемый фундамент" : "23000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "5000": { 
          "base" : "30500",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "3380", "Профлист-2" : "6760", "Обрешотка-20x20" : "8000", "Обрешотка-40x20" : "9000", "Евроштакетник" : "5010", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "19873", "CAME" : "21500", "FAAC" : "23500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "22000", "Бетонируемый фундамент" : "24000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "5500": { 
          "base" : "38548",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "3500", "Профлист-2" : "7000", "Обрешотка-20x20" : "8000", "Обрешотка-40x20" : "9000", "Евроштакетник" : "5480", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "19873", "CAME" : "22000", "FAAC" : "23500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "23000", "Бетонируемый фундамент" : "25000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "6000": { 
          "base" : "42180",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "3500", "Профлист-2" : "7000", "Обрешотка-20x20" : "8200", "Обрешотка-40x20" : "9200", "Евроштакетник" : "6000", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "20373", "CAME" : "22735", "FAAC" : "24000", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "24000", "Бетонируемый фундамент" : "26000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
      }, //1500
      "2000": {
        "3000": { 
          "base" : "28000",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "2000", "Профлист-2" : "4000", "Обрешотка-20x20" : "3500", "Обрешотка-40x20" : "6000", "Евроштакетник" : "3840", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "16000", "CAME" : "20500", "FAAC" : "22500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "18000", "Бетонируемый фундамент" : "22000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "3500": { 
          "base" : "28500",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "2300", "Профлист-2" : "4600", "Обрешотка-20x20" : "4500", "Обрешотка-40x20" : "6800", "Евроштакетник" : "4507", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "16500", "CAME" : "21000", "FAAC" : "23000", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "19000", "Бетонируемый фундамент" : "22000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "4000": { 
          "base" : "29000",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "2300", "Профлист-2" : "4600", "Обрешотка-20x20" : "6500", "Обрешотка-40x20" : "7800", "Евроштакетник" : "5065", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "18380", "CAME" : "21000", "FAAC" : "23000", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "20000", "Бетонируемый фундамент" : "22000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "4500": { 
          "base" : "29500",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "2875", "Профлист-2" : "5750", "Обрешотка-20x20" : "7700", "Обрешотка-40x20" : "8700", "Евроштакетник" : "5624", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "18880", "CAME" : "21500", "FAAC" : "23500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "21000", "Бетонируемый фундамент" : "23000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "5000": { 
          "base" : "33100",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "2875", "Профлист-2" : "5750", "Обрешотка-20x20" : "8700", "Обрешотка-40x20" : "9800", "Евроштакетник" : "6302", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "19873", "CAME" : "21500", "FAAC" : "23500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "22000", "Бетонируемый фундамент" : "24000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "5500": { 
          "base" : "42500",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "3500", "Профлист-2" : "7000", "Обрешотка-20x20" : "8800", "Обрешотка-40x20" : "9800", "Евроштакетник" : "6861", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "19873", "CAME" : "22000", "FAAC" : "23500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "23000", "Бетонируемый фундамент" : "25000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "6000": { 
          "base" : "44500",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "3500", "Профлист-2" : "7000", "Обрешотка-20x20" : "9800", "Обрешотка-40x20" : "10800", "Евроштакетник" : "7539", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "20805", "CAME" : "22735", "FAAC" : "29370", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "24000", "Бетонируемый фундамент" : "26000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
      }, //2000
      "2500": {
        "3000": { 
          "base" : "29900",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "2200", "Профлист-2" : "4400", "Обрешотка-20x20" : "5500", "Обрешотка-40x20" : "8600", "Евроштакетник" : "5010", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "17880", "CAME" : "20500", "FAAC" : "22500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "18000", "Бетонируемый фундамент" : "22000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "3500": { 
          "base" : "31700",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "2830", "Профлист-2" : "5660", "Обрешотка-20x20" : "6500", "Обрешотка-40x20" : "9600", "Евроштакетник" : "5715", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "18380", "CAME" : "21000", "FAAC" : "23000", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "19000", "Бетонируемый фундамент" : "22000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "4000": { 
          "base" : "32300",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "2830", "Профлист-2" : "5660", "Обрешотка-20x20" : "7500", "Обрешотка-40x20" : "10500", "Евроштакетник" : "6575", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "18380", "CAME" : "21000", "FAAC" : "23000", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "20000", "Бетонируемый фундамент" : "22000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "4500": { 
          "base" : "32800",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "3538", "Профлист-2" : "7076",  "Обрешотка-20x20" : "8500", "Обрешотка-40x20" : "11500", "Евроштакетник" : "7283", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "18880", "CAME" : "21500", "FAAC" : "23500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "21000", "Бетонируемый фундамент" : "23000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "5000": { 
          "base" : "33800",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "3538", "Профлист-2" : "7076", "Обрешотка-20x20" : "9500", "Обрешотка-40x20" : "12500", "Евроштакетник" : "7990", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "19873", "CAME" : "21500", "FAAC" : "23500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "22000", "Бетонируемый фундамент" : "24000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "5500": { 
          "base" : "45600",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "8500", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "4245", "Профлист-2" : "8490", "Обрешотка-20x20" : "10500", "Обрешотка-40x20" : "13500", "Евроштакетник" : "8700", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "20305", "CAME" : "22375", "FAAC" : "28870", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "23000", "Бетонируемый фундамент" : "25000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "6000": { 
          "base" : "46600",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "9000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "4245", "Профлист-2" : "8490", "Обрешотка-20x20" : "11500", "Обрешотка-40x20" : "14500", "Евроштакетник" : "8700", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "20805", "CAME" : "22735", "FAAC" : "29370", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "24000", "Бетонируемый фундамент" : "26000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
      }, //2500
      "3000": {
        "3000": { 
          "base" : "31900",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "9000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "4365", "Профлист-2" : "8730", "Обрешотка-20x20" : "6800", "Обрешотка-40x20" : "9800", "Евроштакетник" : "6210", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "17880", "CAME" : "20500", "FAAC" : "22500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "18000", "Бетонируемый фундамент" : "22000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "3500": { 
          "base" : "32500",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "9000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "5540", "Профлист-2" : "11080", "Обрешотка-20x20" : "7800", "Обрешотка-40x20" : "10800", "Евроштакетник" : "7010", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "18380", "CAME" : "21000", "FAAC" : "23000", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "19000", "Бетонируемый фундамент" : "22000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "4000": { 
          "base" : "34500",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "9000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "5540", "Профлист-2" : "11080", "Обрешотка-20x20" : "8800", "Обрешотка-40x20" : "11800", "Евроштакетник" : "7820", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "18380", "CAME" : "21000", "FAAC" : "23000", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "20000", "Бетонируемый фундамент" : "22000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "4500": { 
          "base" : "37500",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "9000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "6795", "Профлист-2" : "13590", "Обрешотка-20x20" : "9800", "Обрешотка-40x20" : "12800", "Евроштакетник" : "8540", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "18380", "CAME" : "22375", "FAAC" : "23500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "21000", "Бетонируемый фундамент" : "23000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "5000": { 
          "base" : "39500",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "9000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "6795", "Профлист-2" : "13590", "Обрешотка-20x20" : "10800", "Обрешотка-40x20" : "13800", "Евроштакетник" : "9260", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "19873", "CAME" : "21500", "FAAC" : "23500", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "22000", "Бетонируемый фундамент" : "24000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "5500": { 
          "base" : "48600",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "9000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "6930", "Профлист-2" : "13860", "Обрешотка-20x20" : "11800", "Обрешотка-40x20" : "14800", "Евроштакетник" : "10010", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "20305", "CAME" : "22375", "FAAC" : "28870", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "23000", "Бетонируемый фундамент" : "25000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
        "6000": { 
          "base" : "51600",
          "door": { "Калитка встроенная" : "9000", "Калитка отдельно" : "10000", "Без калитки" : "0" },
          "install": { "Нашими специалистами" : "10000", "Самостоятельно" : "0" },
          "cover_type": { "Профлист-1" : "6930", "Профлист-2" : "13860", "Обрешотка-20x20" : "12800", "Обрешотка-40x20" : "15800", "Евроштакетник" : "10760", "Без обшивки" : "0" },
          "auto_type": { "NICE" : "20805", "CAME" : "22735", "FAAC" : "29370", "Без автоматики" : "0" },
          "auto_install": { "Нашими специалистами" : "6000", "Самостоятельно" : "0" },
          "foundation_type": { "Свайный фундамент" : "24000", "Бетонируемый фундамент" : "26000", "Буду делать сам" : "0", "Фундамент готов" : "0" }
        },
      }, //3000
    }

    var questionsText = [
      "Как правильно сделать замер ворот?", 
      "Как правильно сделать замер ворот?", 
      "Какой тип обшивки Вам подойдет?", 
      "Какая система автоматики Вам подойдет?", 
      "Какая система автоматики Вам подойдет?", 
      "Какой тип фундамента Вам подойдет?"
    ];

    $('.b-calc').each(function(){

      var container = $(this);
      var stepList = container.find('.b-calc__step');
      var navContainer = container.find('.b-calc__bottom');
      var rightBarContainer = $('#screen-2').find('.b-screen-2__right');
      var nextBtn = container.find('.b-calc__next');
      var prevBtn = container.find('.b-calc__prev');
      var errorContainer = container.find('.b-calc__nav-error');
      var stepsLink = $('.b-steps').find('div');
      var currentStepCounter = 0;
      var maxProceedStep = 0;
      var currentStepContainer = stepList.eq(currentStepCounter);
      var maxStep = 6;
      var gateHeight = '1500';
      var gateWidth = '3000';
      var curGate = prices[gateHeight][gateWidth];

      //prices
      var discount = 2000;
      var basePrice = parseInt(curGate['base']);
      var gatePrice = [0, null];
      var gateInstallPrice = [0, null];
      var automaticPrice = [0, null];
      var automaticInstallPrice = [0, null];
      var coverPrice = [0, null];
      var foundationPrice = [0, null];
      var discountPrice = 0;

      var answerHeight = container.find('.calc-height');
      var answerWidth = container.find('.calc-width');
      var answerGate = container.find('.calc-gate');
      var answerGateInstall = container.find('.calc-gate-install');
      var answerCover = container.find('.calc-cover-type');
      var answerAutomatic = container.find('.calc-automatic');
      var answerAutomaticInstall = container.find('.calc-automatic-install');
      var answerFoundation = container.find('.calc-foundation');
      var answerPrice = container.find('.calc-price');

      var priceContainer = container.find('.b-calc__summary .price span');
      var newPriceContainer = container.find('.b-calc__newPrice span');
      var discountContainer = $('.js-calc-discount');
      var questionsContainer = $('.js-question-item');
      var questionsContainerFormField = $('.js-form input[name="Вопрос"]');
      var bottomHeight = navContainer.outerHeight();

      function stepValidation() {
        if (currentStepContainer.find('input:not(.add):checked').length > 0) return true;
          else return false;
      }

      function updateStepLinks() {
        stepsLink.removeClass('is-active');
        if (currentStepCounter >= maxStep ) {
          stepsLink.eq(currentStepCounter - 1).addClass('is-active');
        } else {
          stepsLink.eq(currentStepCounter).addClass('is-active');
        }
      }

      function updateQuestions() {
        questionsContainer.text(questionsText[currentStepCounter]);
        questionsContainerFormField.val(questionsText[currentStepCounter]);
      }

      function check(name, value) {
        if(name == "door") {
          if (curGate[name].hasOwnProperty(value)) {
            answerGate.text(value);
            answerGate.val(value);
            gatePrice[0] = parseInt(curGate[name][value]);
            if (gatePrice[0] > 0) {
              gatePrice[0] += discount;
              gatePrice[1] = 1;
            } else {
              gatePrice[1] = 0;
            }
          }
        }
        if(name == "install") {
          if (curGate[name].hasOwnProperty(value)) {
            answerGateInstall.text(value);
            answerGateInstall.val(value);
            gateInstallPrice[0] = parseInt(curGate[name][value]);
            if (gateInstallPrice[0] > 0) {
              gateInstallPrice[0] += discount;
              gateInstallPrice[1] = 1;
            } else {
              gateInstallPrice[1] = 0;
            }
          }
        }
        if(name == "cover_type") {
          if (curGate[name].hasOwnProperty(value)) {
            answerCover.text(value);
            answerCover.val(value);
            coverPrice[0] = parseInt(curGate[name][value]);
            if (coverPrice[0] > 0) {
              coverPrice[0] += discount;
              coverPrice[1] = 1;
            } else {
              coverPrice[1] = 0;
            }
          }
        }
        if(name == "auto_type") {
          if (curGate[name].hasOwnProperty(value)) {
            answerAutomatic.text(value);
            answerAutomatic.val(value);
            automaticPrice[0] = parseInt(curGate[name][value]);
            if (automaticPrice[0] > 0) {
              automaticPrice[0] += discount;
              automaticPrice[1] = 1;
            } else {
              automaticPrice[1] = 0;
            }
          }
        }
        if(name == "auto_install") {
          if (curGate[name].hasOwnProperty(value)) {
            answerAutomaticInstall.text(value);
            answerAutomaticInstall.val(value);
            automaticInstallPrice[0] = parseInt(curGate[name][value]);
            if (automaticInstallPrice[0] > 0) {
              automaticInstallPrice[0] += discount;
              automaticInstallPrice[1] = 1;
            } else {
              automaticInstallPrice[1] = 0;
            }
          }
        }
        if(name == "foundation_type") {
          if (curGate[name].hasOwnProperty(value)) {
            answerFoundation.text(value);
            answerFoundation.val(value);
            foundationPrice[0] = parseInt(curGate[name][value]);
            if (foundationPrice[0] > 0) {
              foundationPrice[0] += discount;
              foundationPrice[1] = 1;
            } else {
              foundationPrice[1] = 0;
            }
          }
        }
      }

      function updatePrice() {
        basePrice = parseInt(curGate['base']);
        container.find('input:not(.add):checked').each(function(){
          var value = $(this).val();
          var name = $(this).attr('name');
          check(name, value);
        });
        calcPrice();
      }

      function calcPrice() {
        var totalPrice = basePrice + gatePrice[0] + gateInstallPrice[0] + coverPrice[0] + automaticPrice[0] + automaticInstallPrice[0] + foundationPrice[0];
        priceContainer.text(totalPrice);
        discountContainer.text(discountPrice);
        var newPrice = totalPrice - discountPrice;
        newPriceContainer.text(newPrice);
        answerPrice.val(newPrice);
      }

      function priceChange() {
        var value = currentStepContainer.find('input:not(.add):checked').val();
        var name = currentStepContainer.find('input:not(.add):checked').attr('name');
        check(name, value);
        discountPrice = discount * (gatePrice[1] + gateInstallPrice[1] + coverPrice[1] + automaticPrice[1] + automaticInstallPrice[1] + foundationPrice[1]);
        calcPrice();
      }

      function stepChange(direction) {
        if(direction == 1) {
          currentStepContainer.removeClass('is-visible');
          currentStepCounter++;
          if(currentStepCounter == 4 && automaticPrice[1] == 0) {
            currentStepCounter++;
          }
          if(currentStepCounter >= maxProceedStep) maxProceedStep = currentStepCounter;
          if(currentStepCounter >= maxStep) {
            currentStepCounter = maxStep;
            navContainer.hide();
            //rightBarContainer.hide();
            container.closest('.l').addClass('is-centered');
          }
          currentStepContainer = stepList.eq(currentStepCounter);
          updateStepLinks();
          currentStepContainer.addClass('is-visible');
        } else {
          currentStepContainer.removeClass('is-visible');
          currentStepCounter--;
          if(currentStepCounter == 4 && automaticPrice[1] == 0) {
            currentStepCounter--;
          }
          if(currentStepCounter < 0) currentStepCounter = 0;
          currentStepContainer = stepList.eq(currentStepCounter);
          updateStepLinks();
          currentStepContainer.addClass('is-visible');
        }
        updateQuestions();
        priceChange();
      }

      function toStep(index) {
        currentStepContainer.removeClass('is-visible');
        container.closest('.l').removeClass('is-centered');
        currentStepCounter = index;
        currentStepContainer = stepList.eq(index);
        currentStepContainer.addClass('is-visible');
        updateQuestions();
        navContainer.show();
        rightBarContainer.show();
      }

      container.find('input[type="radio"]').on('change', function(){
        errorContainer.removeClass('is-visible');
        priceChange();
      })

      container.find('input[type="range"]').on('change', function(){
        if($(this).attr('name') == 'width') {
          gateWidth = $(this).val();
          if(prices[gateHeight].hasOwnProperty(gateWidth)) {
            curGate = prices[gateHeight][gateWidth];
            answerWidth.text(gateWidth);
          }
        }
        if($(this).attr('name') == 'height') {
          gateHeight = $(this).val();
          if(prices.hasOwnProperty(gateHeight)) {
            curGate = prices[gateHeight][gateWidth];
            answerHeight.text(gateHeight);
          }
        }
        updatePrice();
      })

      nextBtn.on('click', function(){
        if (!stepValidation()) { 
          errorContainer.addClass('is-visible');
          return false;
        } else {
          //errorContainer.removeClass('is-visible');
          stepChange(1);
        }
        
      });
      prevBtn.on('click', function(){
        stepChange(0);
      });
      stepsLink.on('click', function(){
        var index = $(this).index();
        if(index == 4 && automaticPrice[1] == 0) {
          return false;
        }
        if( index > maxProceedStep ) return false;
        stepsLink.removeClass('is-active');
        $(this).addClass('is-active');
        toStep(index);
      })

    });
  })();

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

  $('.js-btn').on('click', function(e){
    e.preventDefault();
    this_ = $(this);
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
      error.insertAfter($(element).parent());
      error.addClass('b-input__error');
    },
    
  });

  $('body .js-form').each(function(){
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
            type: 'inline',
            removalDelay: 400,
            mainClass: 'mfp-zoom-in',
          }),
          this_.trigger("reset");
        });
        return false;
      },
    });
  });

});