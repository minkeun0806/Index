$(document).ready(function() {
	var boxJoin = Math.round( $("article:nth-of-type(1)").offset().top );
	var filter="win16|win32|win64|mac";
	if(navigator.platform){
		if(0>filter.indexOf(navigator.platform.toLowerCase())){
			$('.title_footer').css('font-size', '1.2em');
		};
	};


	function navigationActive1(){
		if (boxJoin - 1 > $(window).scrollTop()){
			$('nav').css({'position': 'absolute'});
		}else if($(window).scrollTop() >= boxJoin - 1){
			$('nav').css({'position': 'fixed'});
		};
	};
	
	$('.menu_activeActionBar').width($('nav .navigation_container ul li').width());
	$('.navigation_container').width($('.header_container').width()).height($('nav').height());

	navigationActive1();

	$(window).on('scroll', function() {
		$('.menu_activeActionBar').width($('nav .navigation_container ul li').width());
		$('.navigation_container').width($('.header_container').width()).height($('nav').height());
		navigationActive1();
	});

	$(window).on('resize', function() {
		$('.menu_activeActionBar').width($('nav .navigation_container ul li').width());
		$('.navigation_container').width($('.header_container').width()).height($('nav').height());
		navigationActive1();
	});

	$("nav ul li:nth-of-type(1)").on('click',function(){
		$('body, html').animate({ scrollTop: boxJoin }, 200);
	});
});

