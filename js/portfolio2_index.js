$(document).ready(function() {
	$('header ul li:nth-of-type(3) a').mouseover(function(){
		$('header ul li:nth-of-type(3) a span').css('display', 'inline-block');
	});

	$('header ul li:nth-of-type(3) a').mouseout(function(){
		$('header ul li:nth-of-type(3) a span').css('display', 'none');
	});

	$('header ul li:nth-of-type(4) a').mouseover(function(){
		$('header ul li:nth-of-type(4) a span').css('display', 'inline-block');
	});

	$('header ul li:nth-of-type(4) a').mouseout(function(){
		$('header ul li:nth-of-type(4) a span').css('display', 'none');
	});

	$(window).scroll(function() {
		if($(window).scrollTop() >= 133){
			$('nav').css({'position' : 'fixed', 'top' : 67});
			$('.searchBoxHeader').css('visibility', 'visible');
		}else{
			$('nav').css({'position' : 'relative', 'top' : 'auto'});
			$('.searchBoxHeader').css('visibility', 'hidden');
		};
	});
});
