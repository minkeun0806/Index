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
		autoSlider = setInterval(slideRight, 3000),

	//Pagination button Role 정의
		p_role = 0;

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

    // 슬라이드에 마우스 hover 시 왼쪽, 오른쪽 버튼 표출 및 감춤
    // 슬라이드에 마우스 hover 시 자동 슬라이드 중지
    $('#slider-wrap').hover(
      function(){
      	$(this).addClass('active');
      	clearInterval(autoSlider);
      },function(){
      	$(this).removeClass('active');
      	autoSlider = setInterval(slideRight, 3000);
      }
    );

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
	    if(pos==totalSlidesCount){ pos = 0; }
	    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));

	    //*> optional
	    countSlides();
	    pagination();
	}

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
	    $('#counter').html(parseInt(pos) + 1 + ' / ' + totalSlidesCount);
	}

	function pagination(){
	    $('#pagination-wrap ul li').removeClass('active');
	    $('#pagination-wrap ul li:eq('+pos+')').addClass('active');
	}

	/************************** 페이지 하단 연도 표기 **************************/
	$('#footer_Copyright_Year').html(currentYear);


	$(window).on('resize', function(){
		sliderWidth = $('#slider-wrap').width();
		$('#slider-wrap ul#slider').width(sliderWidth*totalSlidesCount);
		$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));
	});

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
});