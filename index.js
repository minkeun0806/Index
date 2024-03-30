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
});