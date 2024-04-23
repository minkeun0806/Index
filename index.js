$(document).ready(function() {
	$('header ul li a').on('click',function(){
		var menuNo = $(this).attr("href").replace('#', '');;
		var boxPosition = Math.round( $("section[id=" + menuNo + "]").offset().top);
		$('body, html').animate({ scrollTop: boxPosition }, 500);
		navReaction('close');
	});
	$('#logo').on('click',function(){
		$('body, html').animate({ scrollTop: 0 }, 500);
		navReaction('close');
	});
	$('#scrollBtn').on('click',function(){
		$('body, html').animate({ scrollTop: Math.round( $("section[id='자기소개']").offset().top) }, 500);
		navReaction('close');
	});
	$('#모바일메뉴').on('click',function(){
		if($(this).hasClass('nav-actived')){
			navReaction('close');
		} else {
			navReaction('open');
		};
	});
});

function navReaction(_action){
	if(_action == 'open'){
		$('#모바일메뉴').addClass('nav-actived');
		$('nav').removeClass('max-[640px]:hidden').addClass('max-[640px]:fixed max-[640px]:top-[62px] max-[640px]:right-[0px]');
	} else if(_action == 'close') {
		$('#모바일메뉴').removeClass('nav-actived');
		$('nav').removeClass('max-[640px]:fixed max-[640px]:top-[62px] max-[640px]:right-[0px]').addClass('max-[640px]:hidden');
	};
};