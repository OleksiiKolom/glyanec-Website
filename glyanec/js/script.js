$(document).ready(function(){
	$('.header__burger').click(function(){
        $('.header__burger, .navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.navigation__link').click(function(){
        if ($('.navigation').hasClass('active')) {
            $('.header__burger, .navigation').removeClass('active');
            $('body').removeClass('lock');
        }
    });

	$('.navigation__link_1, .navigation__link_2, .navigation__link_3, .navigation__link_4, .navigation__link_5, .join__anchor').on('click', function(e) {
		e.preventDefault();
		
		var target = $(this).attr('href');
		var offset = 100;
		var duration = 1000;
		
		var targetOffset = $(target).offset().top - offset;
		
		$('html,body').stop().animate({ scrollTop: targetOffset }, duration);
	});
});