function is_mobile() {return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));};
function fix100vh() {
  var winHeight = $(window).height();
  if (is_mobile() ) {
        $('.100vh-fix').each(function(index, el) {
            if ($(this).data('change')){
                $(this).css('height', winHeight - $(this).data('change'));
            }
            else{
                 $(this).css('height', winHeight);
            }
        });
       
    } 
}; 

$(document).ready(function() {
    window.Application = {
        Components: {},
        /**
         * Front controller application, init all plugin
         * and event handler
         */
        addComponent: function(name, object) {
            this.Components[name] = object;
            object.run();
            if (object.resizeFunctions != null && typeof(object.resizeFunctions) == "function") {
                $(window).on("resize", function() {
                    object.resizeFunctions();
                });
            };
            if (object.scrollFunctions != null && typeof(object.scrollFunctions) == "function") {
                $(window).on("scroll", function() {
                    object.scrollFunctions();
                });
            };
            if (object.loadFunctions != null && typeof(object.loadFunctions) == "function") {
                $(window).on("load", function() {
                    object.loadFunctions();
                });
            }
        }
    }
});
$(function() {
    var Main = {
        run: function() {
            this.Init();
            this.Main();
            this.fancybox();
            this.owlCarusel();   
            this.InputMask();
            this.AjaxForms();
        },
        resizeFunctions:function(){
            // fix100vh();
        },
        Init: function() {
          // fix100vh();
        },
      
        Main: function() {   
            $(window).scroll(function() {
             
                if ($(window).scrollTop() > $('header').height()) {
                    $('body').addClass('header-fixed');
                } else {
                    $('body').removeClass('header-fixed');
                }
            });
            $('.js-go-to').click(function() {
                var scroll_el = $(this).attr('href');
                if ($(scroll_el).length != 0) {
                    $('html, body').animate({
                        scrollTop: $(scroll_el).offset().top - $('.header').outerHeight()
                    }, 1000); // анимируем скроолинг к элементу scroll_el
                }
                return false; // выключаем стандартное действие
            });
            /*$('.form input[type="text"]').on('focus', function(){
                $(this).parents('.form').addClass('form-focus')

            })
            $('.form input[type="text"]').on('focusout', function(){
                $(this).parents('.form').removeClass('form-focus')

            })*/
            $('.form__date-item').on('click', function(){
                let $form = $(this).parents('.form'),
                    $tab = $(this).parents('.tab'),
                $tabHead =  $(this).parents('.form__tab').find('.form__tab-head'),
                index = $tab.index(),
                sectionId = $(this).data('id'),
                bizon = $(this).data('bizon'),
                weekday = $(this).data('weekday'),
                date = $(this).data('date');
                $tab.removeClass('active')
                    .next()
                    .addClass('active');
                   $tabHead.find('.tab-link.active').removeClass('active')
                    .next()
                    .addClass('active');
                  $form.find('input[name="section_id"]').val(sectionId);
                  $form.find('input[name="bizon"]').val(bizon);
                  $form.find('input[name="weekday"]').val(weekday);
                  $form.find('input[name="date"]').val(date);
                $form.find('input[name="window_width"]').val($(window).width());
                  


                $.ajax({
                    url: 'ajax/form.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {action:'GetWebinar', section_id:sectionId}
                }).done(function(data) {
                    $form.find('.viber').attr('href', data.VIBER);
                    $form.find('.telegramm').attr('href', data.TELEGRAM);
                    $form.find('.fb').attr('href', data.FACEBOOK);

                    
                });

            })
            $('.form__tab .tab-link').on('click', function(){
                if ($(this).hasClass('active'))
                    return false;
                let $tabLink = $(this),
                    $tab = $(this).parents('.form__tab'),
                    tabLinkIndex =  $tabLink.index();
                if (tabLinkIndex == 1)
                    return false;
                    $tab.find('.tab-link').removeClass('active');
                    $tab.find('.tab-link:eq('+tabLinkIndex+')').addClass('active');
                    $tab.find('.tab').removeClass('active');
                    $tab.find('.tab:eq('+tabLinkIndex+')').addClass('active');
            });
           
            /*if (screen.width < 420){
                $('.slide .slide__form').addClass('animated');
                setTimeout(function(){
                    $('.slide .slide__form').removeClass('animated');

                }, 1500);
            }*/
        },
       
        fancybox: function() {
            $('.fancybox').fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                autoSize: true,
                closeClick: false,
                title: null,
                padding: 0
            });

        },
        owlCarusel: function() {
            if (screen.width < 1024){
                $slideItem = $('.slide__item-what');
                $slideItemClone = $slideItem.clone();
                $slideItem.addClass('item-what-fist');
                $slideItemClone.addClass('item-what-two')
                $slideItem.after($slideItemClone);   
                $slideItem.find('.what .what__item:eq(2), .what .what__item:eq(3)').remove();
                $slideItemClone.find('.what .what__item:eq(0), .what .what__item:eq(1)').remove();
            }
            function SetTextPrevNext(index){
                let $itemActive = $slider.find('.owl-item:eq('+index+')');
                 textPrev = $itemActive.find('.slide__item').data('text-prev');    
                 textNext = $itemActive.find('.slide__item').data('text-next');  
                 if (!textPrev){
                    textPrev = '';
                 }
                 if (!textNext){
                    textNext = '';
                 }
                 $slider.find('.owl-prev').html('<div>'+textPrev+'</div>');
                 $slider.find('.owl-next').html('<div>'+textNext+'</div>');
            }

            $slider = $('.slide .slide-inner');
            $slider.on('changed.owl.carousel',
                    function(e) {
                        if (e.page.index > 0){
                            $('.slide').addClass('scroll-active');
                        }
                        else{
                             $('.slide').removeClass('scroll-active');
                        }
                    if (e.page.index == -1){
                        e.page.index = 0;
                    }
                   SetTextPrevNext( e.page.index);
               });
               $slider.on('changed.owl.carousel',
                    function(e) {                            
                       setTimeout(function(){
                            SetTextPrevNext( e.page.index);
                       }, 500); 
                });

              $slider.owlCarousel({
                items: 1,
                margin: 0,
                nav: true,
                dots: true,
                lazyLoad: true,
                autoWidth: false, 
                 navText: '',          
                responsiveRefreshRate: 1,
                center: false,
                loop: false,
                startPosition: 0,
                //animateOut: 'zoomOutDown',
               //  animateIn: 'pulse',
                mouseDrag: true
             
            });
              $('.slide__social .home').on('click',function(){
                $('.slide .slide-inner').trigger('to.owl.carousel', 1);

              });   
              $('.slide__item-speech-brand .video-icon a').on('click',function(e){
                  e.preventDefault();
                   $('.slide .slide-inner').trigger('to.owl.carousel', 1);
                    setTimeout(function(){
                        $('.slide .slide__form').removeClass('animated');
                        $('.slide__item-about .img a').trigger('click');
                    }, 500);
              });
              
        },
        InputMask: function() { 
            
            Inputmask("+7 (999) 999-99-99").mask($('.phone-mask'));
        },
        AjaxForms: function() { 
            $('form.ajax-me-baby').submit(function(e) {
                let $form = $(this),
                    bizon = $form.find('input[name="bizon"]').val();
                e.preventDefault(); 
                if ($form.data('submitted')) return;
                $form.data('submitted', true);
                var action = $form.attr('action');  
                $.ajax({
                    url: action,
                    type: 'POST',
                    dataType: 'json',
                    data: $form.serialize()
                }).done(function(data) {
                    $form.find('.error')
                        .removeClass('error');
                   
                    if (data.errors.length) {

                        // highlight errors
                        for (var i = 0; i < data.errors.length; i++) {
                            $form.find('input[name="'+data.errors[i]+'"], textarea[name="'+data.errors[i]+'"], select[name="'+data.errors[i]+'"]').each(function() {
                                var $this = $(this), errorSelector = $this.data('error');
                                if (errorSelector) {
                                    $form.find(errorSelector).addClass('error');
                                }
                                else {

                                        $this.addClass('error');
                                }
                            });
                            
                        }       
                    }
                    else {
                         if (bizon){
                            $.post('https://start.bizon365.ru/subscriber/22501:'+bizon+'/register', 
                                {
                                        email: data.EMAIL,
                                        phone: data.PHONE,
                                        submitButton: 'Записаться',
                                        //time:  parseInt(new Date().getTime()),
                                        timeoffset: 0,
                                        url_marker: ''
                                }
                            );
                        }
                         ym(66280564,'reachGoal',' ORDER');
                        if ($(window).width() < 769){
                            if (data.LINK_LOCATION){
                                 window.location = data.LINK_LOCATION;
                            }
                        }
                        else{
                            window.location = 'senks.php?ID='+data.LINK.ID;
                        }
                       
                      
                        $form.find('input[type="text"]').val('');
                        $form.find('textarea').val(''); 
                    }
                }).always(function() {
                    $form.data('submitted', false); 
                });
            }).find('.form-submit').click(function(e) {
                e.preventDefault(); 
                if ($(this).data('link')){
                     $(this).closest('form').find('input[name="link"]').val($(this).data('link'));
                }
                $(this).closest('form').submit();
            });
         }
        
   
    }

    window.Application.addComponent("Main", Main);
});