$(document).ready(function() {
	$('header ul li a').on('click',function(){
		var menuNo = $(this).attr("href").replace('#', '');;
		var boxPosition = Math.round( $("section[id=" + menuNo + "]").offset().top);
		$('body, html').animate({ scrollTop: boxPosition }, 500);
		navReaction();
	});
	$('#logo').on('click',function(){
		$('body, html').animate({ scrollTop: 0 }, 500);
		navReaction();
	});
	$('#scrollBtn').on('click',function(){
		$('body, html').animate({ scrollTop: Math.round( $("section[id='자기소개']").offset().top) }, 500);
		navReaction();
	});
	$('#모바일메뉴').on('click',function(){
		navReaction();
	});
});

function navReaction(){
	if($('#모바일메뉴').hasClass('nav-actived')){
		$('#모바일메뉴').removeClass('nav-actived');
		$('nav').removeClass('max-[640px]:fixed max-[640px]:top-[62px] max-[640px]:right-[0px]').addClass('max-[640px]:hidden');
	} else {
		$('#모바일메뉴').addClass('nav-actived');
		$('nav').removeClass('max-[640px]:hidden').addClass('max-[640px]:fixed max-[640px]:top-[62px] max-[640px]:right-[0px]');
	};
};