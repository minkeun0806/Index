$(document).ready(function() {
	// 페이지 하단 연도 변수 정의
	var currentDate = new Date(),
		currentYear = currentDate.getFullYear(),

	// 현재 슬라이드 위치 정의
		pos = 0,

	// 총 슬라이드 수 정의
		totalSlidesCount = $('#slider-wrap ul li').length,

	// 슬라이드 너비 정의
		sliderWidth = $('#slider-wrap').width(),

	// 자동 슬라이드 - slideRight 설정
		autoSlider = setInterval(slideRight, 5000),

	// Pagination button Role 정의
		p_role = 0;

	// PC, 모바일 UI 동작
	$('#portfolio_Popup').css({
		'top': ($(window).height() / 2) - ($('#portfolio_Popup').height() / 2),
		'left': ($(window).width() / 2) - ($('#portfolio_Popup').width() / 2)
	});

	if($(window).width() < 800){
    	$('#counter').css('top', 60 + $('.wrapper_Scale').height());
    	$('.btns').css('top', ($('.wrapper_Scale').height() / 2) + 123 - $('.btns').height());
    }else{
    	if($(window).width() < 1425){
    		$('#main_Side_Box').css({
    			'left' : 'none',
    			'right' : '10px'
    		});
    	}else{
    		$('#main_Side_Box').css({
    			'left' : (($(window).width() - $('section').width()) / 2) + $('section').width() + 20,
    			'right' : 'none'
    		});
    	};
    };

	/************************** 슬라이드 정의 및 동작 **************************/
    //set width to be 'x' times the number of slides
    $('#slider-wrap ul#slider').width(sliderWidth*totalSlidesCount);

    //next slide
    $('#next').click(function(){
        slideRight();
    });

    //previous slide
    $('#previous').click(function(){
        slideLeft();
    });

    /*************************
     //*> OPTIONAL SETTINGS
    ************************/
    //for each slide events
    $.each($('#slider-wrap ul li'), function() {
       // pagination 생성
      $('#pagination-wrap ul').append("<li role = " + p_role + " class='pgButton'></li>");

      if( p_role == 0 ){
      	$('.pgButton:nth-of-type(' + 1 + ')').text('LG전자 멤버십 앱 2주년 이벤트');
      }else if( p_role == 1 ){
      	$('.pgButton:nth-of-type(' + 2 + ')').text('DIOS 냉장고 특별전');
      }else if( p_role == 2 ){
      	$('.pgButton:nth-of-type(' + 3 + ')').text('LG DIOS 김치톡톡 중고보상 이벤트');
      }else if( p_role == 3 ){
      	$('.pgButton:nth-of-type(' + 4 + ')').text('LG 그램 구매 혜택');
      }else if( p_role == 4 ){
      	$('.pgButton:nth-of-type(' + 5 + ')').text('LG HomeBrew 특별이벤트');
      };
       p_role++;
    });

    //counter
    countSlides();

    //pagination
    pagination();

	$('#slide_Button').on('click',function(){
		//멈춤 버튼 클릭 시 동작
		if($(this).hasClass('slide_Button_Actived') == true){
			$(this).removeClass('slide_Button_Actived');
			$(this).addClass('slide_Button_Deactived');
      		autoSlider = setInterval(slideRight, 5000);
		//재생 버튼 클릭 시 동작
		}else{
			$(this).addClass('slide_Button_Actived');
			$(this).removeClass('slide_Button_Deactived');
      		clearInterval(autoSlider);
		};
	});

    /***********
	 SLIDE LEFT
	************/
	function slideLeft(){
	    pos--;
	    if(pos==-1){ pos = totalSlidesCount-1; }
	    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));

	    //*> optional
	    countSlides();
	    pagination();
	}


	/************
	 SLIDE RIGHT
	*************/
	function slideRight(){
	    pos++;
	    if(pos==totalSlidesCount){ pos = 0; };
	    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));

	    //*> optional
	    countSlides();
	    pagination();
	}

	// 슬라이드 하단 Pagination 버튼 클릭 시 이벤트
	$(".pgButton").on('click', function(){
		var menuNo = $(this).attr("role");

		pos = menuNo;

	    if(pos == -1){
	    	pos = totalSlidesCount-1;
	    } else if(pos == totalSlidesCount){
	    	pos = 0;
	    }
	    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));
	    countSlides();
	    //$('#counter').html(parseInt(pos) + 1 + ' / ' + totalSlidesCount);
	    pagination();
    });

	/************************
	 //*> OPTIONAL SETTINGS
	************************/
	function countSlides(){
	    $('#counter').html(parseInt(pos) + 1 + ' / ' + '<span id="txt_total">' + totalSlidesCount + '</span>');
	}

	function pagination(){
	    $('#pagination-wrap ul li').removeClass('active');
	    $('#pagination-wrap ul li:eq('+pos+')').addClass('active');
	}

	// 슬라이드 왼쪽, 오른쪽 버튼 표기 / 숨김 이벤트
	$('#slider-wrap').hover(
    function(){
    	if($(window).width() < 800){
    		$('#slider-wrap').addClass('active');
		};
    }, function(){
    	if($(window).width() < 800){
    		$('#slider-wrap').removeClass('active');
		};
    });


	/************************** 팝업창 드래그 동작 **************************/
	dragElement(document.getElementById("portfolio_Popup"));

	function dragElement(elmnt) {
			var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
			if (document.getElementById(elmnt.id + "header")) {
				/* if present, the header is where you move the DIV from:*/
				document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
			} else {
				/* otherwise, move the DIV from anywhere inside the DIV:*/
				elmnt.onmousedown = dragMouseDown;
			};

		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
		};

		function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		};

		function closeDragElement() {
			/* stop moving when mouse button is released:*/
			document.onmouseup = null;
			document.onmousemove = null;
		};
	}

	//닫기 버튼 클릭시 슬라이드 사라짐
	$('#popup_Close').on('click', function(){
		$('#portfolio_Popup').fadeOut(250);
	});

	/************************** 문서 사이즈 변경 시 동작 **************************/
	$(window).on('resize', function(){
		//슬라이드 크기 조절
		sliderWidth = $('#slider-wrap').width();
		$('#slider-wrap ul#slider').width(sliderWidth*totalSlidesCount);
		$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));

		// PC, 모바일 UI 동작
		if($(window).width() < 800){
    		$('#slider-wrap').removeClass('active');
    		$('#counter').css('top', 60 + $('.wrapper_Scale').height());
    		$('.btns').css('top', ($('.wrapper_Scale').height() / 2) + 123 - $('.btns').height());
    	}else{
    		$('footer strong').removeClass('mobile_Footer_Actived');
			$('footer strong').addClass('mobile_Footer_Deactived');
    		$('#mobile_Address').css('display', 'none');

    		if($(window).width() < 1425){
	    		$('#main_Side_Box').css({
	    			'left' : 'none',
	    			'right' : '10px'
	    		});
	    	}else{
	    		$('#main_Side_Box').css({
	    			'left' : (($(window).width() - $('section').width()) / 2) + $('section').width() + 20,
	    			'right' : 'none'
	    		});
	    	};
    	};
	});

	/************************** 브라우저 화면 스크롤 시 동작 **************************/
	$(window).on('scroll', function(){
		// PC UI - 브라우저 스크롤 위치에 따른 화면 오른쪽 aside 위치 이벤트
		if($(window).scrollTop() >= 630 - (($(window).height() - $('#main_Side_Box').height()) / 2) ){
			$('#main_Side_Box').css({
				'position' : 'fixed',
				'top': ($(window).height() - $('#main_Side_Box').height()) / 2
			});
		}else{
			$('#main_Side_Box').css({
				'position' : 'absolute',
				'top': '710px'
			});
		}
	});

	/************************** 페이지 하단 연도 표기 **************************/
	$('#footer_Copyright_Year').html(currentYear);
	$('#footer_Copyright_Year_Mobile').html(currentYear);

	/************************** PC UI 메뉴 hover 이벤트 **************************/
	$('.main_Category_Depth1').hover(function() {
		$(this).children('.main_Category_Depth2').css('display', 'block');

		$(this).children('.main_Category_Depth2')
			   .children('.main_Category_Depth2_List_Container')
			   .children('.category_Depth2_List')
			   .children('.category_Depth2_Context')
			   .hover(function() {
			$(this).children('.category_Depth3_List').css('display', 'block');
		}, function(){
			$(this).children('.category_Depth3_List').css('display', 'none');
		});

	}, function(){
		$(this).children('.main_Category_Depth2').css('display', 'none');
	});

	//************************** 각종 클릭 이벤트 **************************/

	// PC UI - 카테고리 버튼 클릭 시 이벤트
	$('.category_Button').on('click', function(){
		//카테고리 버튼 다시 클릭 시 카테고리 1depths 사라짐
		if($(this).hasClass('category_Menu_Actived') == true){
			$(this).removeClass('category_Menu_Actived');
			$('.category_Menu_Container').css('display', 'none');
		//카테고리 버튼 클릭 시 카테고리 1depths 표출
		}else{
			$(this).addClass('category_Menu_Actived');
			$('.category_Menu_Container').css('display', 'block');
		};
	});

	// 모바일 UI - 하단 통신판매업자 클릭 시 이벤트
	$('footer strong').on('click', function(){
		//하단 통신판매업자 재 클릭 시 address 사라짐
		if($(this).hasClass('mobile_Footer_Actived') == true){
			$(this).removeClass('mobile_Footer_Actived');
			$(this).addClass('mobile_Footer_Deactived');
			$('#mobile_Address').css('display', 'none');
		//하단 통신판매업자 클릭 시 address 표출
		}else{
			$(this).removeClass('mobile_Footer_Deactived');
			$(this).addClass('mobile_Footer_Actived');
			$('#mobile_Address').css('display', 'block');
		};
	});

	$('#goToTop').on('click', function(){
		$('html, body').animate({scrollTop: '0'}, 200);
	});
});