$(document).ready(function() {
	var boxIntro = Math.round( $("#menu_1").offset().top );
	var boxProgram = Math.round( $("#menu_2").offset().top );
	var boxLocation = Math.round( $("#menu_3").offset().top );
	var boxJoin = Math.round( $("#menu_4").offset().top );
	var filter="win16|win32|win64|mac";
	if(navigator.platform){
		if(0>filter.indexOf(navigator.platform.toLowerCase())){
			$('.title_footer').css('font-size', '1.2em');
		};
	};

	//스폰서 페이지 이동
	
	//1. 소노펠리체
	$('.sponsor1').on('click', function(){
		window.open('https://www.sonofeliceconvention.com/homeMain.sc');});
	//2. 락희호텔
	$('.sponsor2').on('click', function(){window.open('http://www.hotellacky.com/');});
	//3. LPG 뱅크
	$('.sponsor3').on('click', function(){window.open('http://www.lpgbank.com/');});
	//4. 키타가와
	$('.sponsor4').on('click', function(){window.open('https://www.kitagawa-ind.com/');});
	//5. 로보위즈
	$('.sponsor5').on('click', function(){window.open('http://www.robowiz.co.kr/');});
	//6. 브이테크
	$('.sponsor6').on('click', function(){window.open('http://w-vtech.com/');});

    //모달팝업 닫기
    $('.alert_modalClose').on('click', function(){
        $(".alert_modalPopup p").remove();
        $(".opacity_block").hide();
        $(".alert_modalPopup").hide();
        $('body').css('overflow-y', 'scroll');
        $('.intro_submitBtn').attr("disabled",false);
    });
    function modalOpen(html){
		$(".opacity_block").show();
		//var html = html_Message = "<p class=\"fnt_bold\">사전등록이 <span class=\"fnt_pink\">마감</span>되었습니다.</p><p>행사 당일 <span class=\"fnt_pink\">현장등록</span>만 가능합니다.</p>"; 
	    $(".alert_modalPopup").show().append(html);
	    $('body').css('overflow-y', 'hidden');
	    $('.intro_submitBtn').attr("disabled",true);
    }
    function pageMoveCheck(){
    		var postData = {};
		$.ajax({
	        url : "proxy.jsp?http://inf.e-mpark.com/conference_count",
	        contentType: 'application/json; charset=utf-8',
	        type:"post",
	        dataType : "json",
	        data : postData,
	        success:function (response){
	        		if(response.return == null){
	        			if(Number(response.online)<250){
	        				location.href = './join.html#menu_4';
	        			}else{
//		        			$(".opacity_block").show();
		        			var html = html_Message = "<p class=\"fnt_bold\"><span class=\"fnt_pink\">사전등록</span>이 <span class=\"fnt_pink\">마감</span>되었습니다.</p><p>행사 당일 <span class=\"fnt_pink\">현장등록</span>만 가능합니다.</p>"; 
		        			modalOpen(html);
//		        			$(".alert_modalPopup").show().append(html);
//		                $('body').css('overflow-y', 'hidden');
//		                $('.intro_submitBtn').attr("disabled",true);
	        			}
	        		}else{
//	        			$(".opacity_block").show();
	        			var html = html_Message = "<p class=\"fnt_bold\">사전등록 페이지 불러오기 <span class=\"fnt_pink\">실패</span><br/></p>"; 
	        			modalOpen(html);
//	                $(".alert_modalPopup").show().append(html);
//	                $('body').css('overflow-y', 'hidden');
//	                $('.intro_submitBtn').attr("disabled",true);
	        		}
	        }
	      });
    }

	$('.menu_activeActionBar').width($('nav .navigation_container ul li').width());
	$('.navigation_container').width($('.header_container').width()).height($('nav').height());

	$('.join_li, .intro_submitBtn, .intro_submitBtn2').on('click', function(){
		pageMoveCheck();
	});

	navigationActive();

	$("nav .navigation_container ul li:nth-of-type(1)").on('click',function(){
		$('body, html').animate({ scrollTop: boxIntro + 15 }, 200);
	});

	$("nav .navigation_container ul li:nth-of-type(2)").on('click',function(){
		$('body, html').animate({ scrollTop: boxProgram + 15 }, 200);
	});

	$("nav .navigation_container ul li:nth-of-type(3)").on('click',function(){
		$('body, html').animate({ scrollTop: boxLocation + 15 }, 200);
	});

	$(window).on('scroll', function() {
		$('.menu_activeActionBar').width($('nav .navigation_container ul li').width());
		$('.navigation_container').width($('.header_container').width()).height($('nav').height());
		navigationActive();
	});

	$(window).on('resize', function() {
		$('.menu_activeActionBar').width($('nav .navigation_container ul li').width());
		$('.navigation_container').width($('.header_container').width()).height($('nav').height());
		navigationActive();
	});

	function navigationActive(){
		if ($("article:nth-of-type(1)").offset().top - 1 > $(window).scrollTop()){
			$('nav').css({'position': 'absolute'});
		}else if($(window).scrollTop() >= boxIntro - 1 ){
			$('nav').css({'position': 'fixed'});
		};
	};

	$(window).on("scroll",gnbActive);
  
	function gnbActive(){
	   var sct = $(window).scrollTop();
	   
	   var img_menu1 = boxIntro;
	   var img_menu2 = boxProgram;
	   var img_menu3 = boxLocation;
	   var img_menu4 = boxJoin;
	   var img_menu5 = $("#menu_5").offset().top;
	   var img_footer =  $("footer").offset().top;
	   
	   var top_menu_H = $(".navigation_container").height();
	   
	   //var subMenuIdx = -1;
	   
	   var now_scroll_H = sct + top_menu_H+20;
	   
	   if (now_scroll_H < img_menu1){
	      //subMenuIdx = 1;
	      $("nav .navigation_container ul li").removeClass("bd_pink");
	   } else if (now_scroll_H < img_menu2){
	      //subMenuIdx = 2;
	      $("nav .navigation_container ul li").removeClass("bd_pink");
	      $("nav .navigation_container ul li:nth-of-type(1)").addClass("bd_pink");
	   } else if (now_scroll_H < img_menu3){
	      //subMenuIdx = 3;
	      $("nav .navigation_container ul li").removeClass("bd_pink");
	       $("nav .navigation_container ul li:nth-of-type(2)").addClass("bd_pink");
	   } else if (now_scroll_H < img_menu4){
	   		$("nav .navigation_container ul li").removeClass("bd_pink");
	   		$("nav .navigation_container ul li:nth-of-type(3)").addClass("bd_pink");
	   } else if (now_scroll_H < img_menu5){
	   		$("nav .navigation_container ul li").removeClass("bd_pink");
	   		$("nav .navigation_container ul li:nth-of-type(4)").addClass("bd_pink");
	   } else if (now_scroll_H < img_footer){
	   		$("nav .navigation_container ul li").removeClass("bd_pink");
	   };
	  };
	  gnbActive();

});