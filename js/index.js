$(document).ready(function() {
	resizeLayout();
	$(window).on('resize', function(){
		resizeLayout();
	});

	var filter = "win16|win32|win64|mac";

	if(navigator.platform){
		if(0 > filter.indexOf(navigator.platform.toLowerCase())){
			$('.background_video1').css('display', 'none');
		};
	};


	$(".title_menuArea div").mouseover(function(){
		var menuNo = $(this).attr("role");
		if(menuNo == 01) {
			$(this).children("img").attr('src', 'img/index_icon_2_hover.png');
			$(this).children("h3").css('color', 'rgba(255,255,255,.90)');
		}
		else if(menuNo == 02) {
			$(this).children("img").attr('src', 'img/index_icon_1_hover.png');
			$(this).children("h3").css('color', 'rgba(255,255,255,.90)');
		}
		else if(menuNo == 03) {
			$(this).children("img").attr('src', 'img/index_icon_3_hover.png');
			$(this).children("h3").css('color', 'rgba(255,255,255,.90)');
		};
    });

    $(".title_menuArea div").mouseout(function(){
    	var menuNo = $(this).attr("role");
    	if(menuNo == 01) {
    		$(this).children("img").attr('src', 'img/index_icon_2.png');
    		$(this).children("h3").css('color', 'rgba(255,255,255,.60)');
    	}
		else if(menuNo == 02) {
			$(this).children("img").attr('src', 'img/index_icon_1.png');
			$(this).children("h3").css('color', 'rgba(255,255,255,.60)');
		}
		else if(menuNo == 03) {
			$(this).children("img").attr('src', 'img/index_icon_3.png');
			$(this).children("h3").css('color', 'rgba(255,255,255,.60)');
		};
    });

    $(".portfolio_area div").mouseover(function(){
		$(this).children(".portfolio_opacity").css('visibility', 'visible');
    });

    $(".portfolio_area div").mouseout(function(){
    	$(this).children(".portfolio_opacity").css('visibility', 'hidden');
    });

    $(".header_button").on('click',function(){
    	 if($(this).is(".actived") == true){
    	 	$(this).removeClass("actived");
    	 	$(".header_menuContainer").animate({left: "-700px"},100);
    	 	$(".menu_activedWrapper").hide();
    	 }else{
    	 	$(this).addClass("actived");
    	 	$(".header_menuContainer").animate({left: "0px"},100);
    	 	$(".menu_activedWrapper").show().on('click',function(){
		    	$(".header_button").removeClass("actived");
			 	$(".header_menuContainer").animate({left: "-700px"},100);
			 	$(".menu_activedWrapper").hide();
		    });
    	 };
    });

    $(".header_menuContainer span").on('click',function(){
    	$(".header_button").removeClass("actived");
	 	$(".header_menuContainer").animate({left: "-700px"},100);
	 	$(".menu_activedWrapper").hide();
    });

    $(".portfolio_area div").on('click',function(){
    	var portfolioNo = $(this).attr("role");
    	if(portfolioNo == 01) {
    		location.href='./views/Portfolio1_index.html';
    	}
		else if(portfolioNo == 02) {
			location.href='https://www.hyundai.com/kr/ko/e';
		}
		else if(portfolioNo == 03) {
			location.href='./views/Portfolio2_index.html';
		}
    });


	$(".menu_buttonHome").on('click',function(){
		var boxHome = Math.round( $("section:nth-of-type(1)").offset().top );
		var boxPortfolio = Math.round( $("section:nth-of-type(2)").offset().top );
		var boxAbout = Math.round( $("article").offset().top );
		var boxContact = Math.round( $("section:nth-of-type(3)").offset().top );
		$('body, html').animate({ scrollTop: boxHome }, 500);
	});

	$(".menu_buttonWorks").on('click',function(){
		var boxHome = Math.round( $("section:nth-of-type(1)").offset().top );
		var boxPortfolio = Math.round( $("section:nth-of-type(2)").offset().top );
		var boxAbout = Math.round( $("article").offset().top );
		var boxContact = Math.round( $("section:nth-of-type(3)").offset().top );
		$('body, html').animate({ scrollTop: boxPortfolio }, 500);
	});

	$(".menu_buttonAbout").on('click',function(){
		var boxHome = Math.round( $("section:nth-of-type(1)").offset().top );
		var boxPortfolio = Math.round( $("section:nth-of-type(2)").offset().top );
		var boxAbout = Math.round( $("article").offset().top );
		var boxContact = Math.round( $("section:nth-of-type(3)").offset().top );
		$('body, html').animate({ scrollTop: boxAbout }, 500);
	});

	$(".menu_buttonContact").on('click',function(){
		var boxHome = Math.round( $("section:nth-of-type(1)").offset().top );
		var boxPortfolio = Math.round( $("section:nth-of-type(2)").offset().top );
		var boxAbout = Math.round( $("article").offset().top );
		var boxContact = Math.round( $("section:nth-of-type(3)").offset().top );
		$('body, html').animate({ scrollTop: boxContact }, 500);
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

function resizeLayout() {
	//$('video').width($(window).width());
	if($(window).height() <= 600){
		$('.title_area').css('top', '10%');
		$('section').height(600);
	}else{
		$('.title_area').css('top', '20%');
		$('section').height($(window).height());
	};
};