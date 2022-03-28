$(document).ready(function(){
    // DIALOG

    $('.dialog-close').click(function(){
            $('.dialog-body').fadeOut('150', function(){
                $('.dialog').fadeOut('100');
            });
    });

    $('.dialog-open').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
            $('.dialog').fadeIn('150', function(){
                $(target).fadeIn('100');
            });
    });

   // Menu Mobile

    $('#nav-toggle').click(function(e){

        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    });


    // Carousel Principal

    $('#carousel-principal').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 0,
        nav: true, 
        navSpeed: 1000,
        navText: ['<i class="fas fa-backward"></i>','<i class="fas fa-forward"></i>'],
        dots: true,
        dotsSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        responseRefreshRate: 10
    });

     // PORTFOLIO
      

     // VARIAVEIS SCROLL
     var nav = $(".header-nav"),
         navHeight = nav.outerHeight(),
         sections = $('.section');



      // SCROLL    
    $(window).on('scroll', function(){
        var sTop = $(this).scrollTop();

        if(sTop > navHeight){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }

        // MARCAS MENU NAV
        if(sTop == 0){
            nav.find('a').removeClass('active');
            nav.find('a[href="#home"]').addClass('active');
        }else{
            sections.each(function(){
                var top = $(this).offset().top - navHeight;
    
                if(sTop >= top){
                    nav.find('a').removeClass('active');
                    nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                }
    
            }); 
        }  
    });

    // NAVEGAÇÂO

    nav.find('a').on('click', function(e){
        e.preventDefault();
        $('.header-collapse').removeClass('active');
        $('#nav-toggle').removeClass('active');


        var target = $(this).attr('href');
        
        if(target == "#home"){
            $('html, body').animate({scrollTop: 0}, 700);
        }else{
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            
            }, 700);

        }
    });

     // BACK TOP

    $('.back-top').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 700);
    });

});


