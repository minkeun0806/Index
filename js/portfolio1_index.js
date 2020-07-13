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

	//automatic slider
		autoSlider = setInterval(slideRight, 5000),

	//Pagination button Role 정의
		p_role = 0;

	if($(window).width() < 800){
    	$('#counter').css('top', 60 + $('.wrapper_Scale').height());
    	$('.btns').css('top', ($('.wrapper_Scale').height() / 2) + 123 - $('.btns').height());
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


    //for each slide
    $.each($('#slider-wrap ul li'), function() {
       // pagination 생성
      $('#pagination-wrap ul').append("<li role = " + p_role + " class='pgButton'></li>");

      console.log($('.pgButton').attr("role"));

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

	/************************** 문서 사이즈 변경 시 동작 **************************/
	$(window).on('resize', function(){
		//슬라이드 크기 조절
		sliderWidth = $('#slider-wrap').width();
		$('#slider-wrap ul#slider').width(sliderWidth*totalSlidesCount);
		$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));
		if($(window).width() < 800){
    		$('#slider-wrap').removeClass('active');
    		$('#counter').css('top', 60 + $('.wrapper_Scale').height());
    		$('.btns').css('top', ($('.wrapper_Scale').height() / 2) + 123 - $('.btns').height());
    	}else{
    		$('footer strong').removeClass('mobile_Footer_Actived');
			$('footer strong').addClass('mobile_Footer_Deactived');
    		$('#mobile_Address').css('display', 'none');
    	};
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

	//************************** DOM Script events **************************/
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
});