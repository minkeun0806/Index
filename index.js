$(document).ready(function() {
	$("header ul li a").on('click',function(){
		var menuNo = $(this).attr("href").replace('#', '');;
		var boxPosition = Math.round( $("section[id=" + menuNo + "]").offset().top);
		$('body, html').animate({ scrollTop: boxPosition }, 500);
	});
	$("#logo").on('click',function(){
		$('body, html').animate({ scrollTop: 0 }, 500);
	});
	$("#scrollBtn").on('click',function(){
		$('body, html').animate({ scrollTop: Math.round( $("section[id='자기소개']").offset().top) }, 500);
	});

	$(window).scroll(function() {
		if($(window).scrollTop() >= $("article:nth-of-type(1)").offset().top - 1 ){
			$('header').fadeIn(1000);
			$('video').hide();
		} else {
			$('header').fadeOut(1000);
			$('video').show();
		};
	});
});
