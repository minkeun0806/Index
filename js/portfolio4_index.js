$(document).ready(function() {
	/*****다큐먼트 준비 시 레이아웃 설정 시작*****/
	$(window).scrollLeft(-100);//스크롤 무조건 왼쪽 끝 정렬

	if($('section:nth-of-type(4)').width() <= $('section:nth-of-type(4)').height()){
		$('section:nth-of-type(4)').css('height', $('section:nth-of-type(4)').width());
		//$('.contextTitle1').css('bottom', '20%');
	}else{
		$('section:nth-of-type(4)').css('height', '100%');
		//$('.contextTitle1').css('bottom', '42%');
	};


	/*페이지 접속 시 에니메이션 및 오브젝트 포지셔닝*/
	$('.title_Section').addClass('section_Active');
	if($(window).width() <= 1590){
		$('.title_Section').addClass('title_Layout1');
/*
		$(".div").animate({
			left: '250px',
			opacity: '0.5',
			height: '150px',
			width: '150px',
			'margin':'0 0 0 0'
		});
*/
		resizeLayout();
		$('.titleimagewrapper1').css({'width':'30.45%','float':'left', 'margin':$(window).height() - $('.titleimagewrapper1 img').height() + (($('.titleimagewrapper1 img').height() / 100) * 28.9) + "px 0px 0px -" + ($('.titleimagewrapper1 img').width() / 100) * 87.2 + 'px'});
		$('.titleimagewrapper3').css({'width':'30.45%','float':'right', 'margin':$(window).height() - $('.titleimagewrapper3 img').height() + (($('.titleimagewrapper3 img').height() / 100) * 7.4) + "px 4.38% 0 0", 'right': '0'});
	}else{
		$('.title_Section').addClass('title_Layout2');



		resizeLayout();
		$('.titleimagewrapper3').css({'width':'484px','float':'left', 'margin':'262px 0 0 1036px', 'right': 'auto'});
	};
	/*****다큐먼트 준비 시 레이아웃 설정 종료*****/

	/*****브라우저 화면 크기 변경 시 레이아웃 리사이징 실행 시작*****/
	$(window).on('resize', function(){

		$(window).scrollLeft(-100);
		resizeLayout(); // 반응형 조건에 부합시에 레이아웃 변경

		/*반응형 레이아웃 출력 시 상시적인 ui 변경*/
		if($('.title_Section').hasClass('section_Active')){ //상단화면 출력 시 동작
			if($(window).width() <= 1590){
				//상단화면 이미지 - 브라우저 크기 별 위치지정
				$('.titleimagewrapper1').css({'width':'30.45%','float':'left', 'margin':$(window).height() - $('.titleimagewrapper1 img').height() + (($('.titleimagewrapper1 img').height() / 100) * 28.9) + "px 0px 0px -" + ($('.titleimagewrapper1 img').width() / 100) * 87.2 + 'px'});
				$('.titleimagewrapper3').css({'width':'30.45%','float':'right', 'margin':$(window).height() - $('.titleimagewrapper3 img').height() + (($('.titleimagewrapper3 img').height() / 100) * 7.4) + "px 4.38% 0 0", 'right': '0'});
				//상단화면 우측 상단 문구 - 브라우저 크기에 따른 문구표출
				$('.title_context1').each(function(){
					if($(window).width() <= 1200){
						$(this).css('display', 'none');
					}else{
						$(this).css({'display':'block', 'font-size':'1.18vw','right': '4.31%','left': 'auto', 'top':$(window).height() - $('.titleimagewrapper3 img').height() + (($('.titleimagewrapper3 img').height() / 100) * 3.2), 'letter-spacing': '-0.03vw'});
					};
				});
				//상단화면 하단 문구 - 브라우저 크기에 따른 문구표출
				$('.title_context2_1').css({'font-size':'1.26vw','left': '25.15%', 'bottom': ($(window).height() / 100) * 7.9, 'letter-spacing': '-0.03vw'});
				$('.title_context2_2').each(function(){
					var text1 = $(this).html();
					if($(window).width() <= 900){
						$(this).html(text1.replace(',', '<br>'));
						$(this).css({'font-size':'1vw','left': '25.15%', 'bottom': ($(window).height() / 100) * 3, 'letter-spacing': '-0.026vw', 'line-height':'2.25vh'});
						if($(window).height() <= 518){$(this).css('display','none')}else{$(this).css('display','inline-block')};
					}else{
						$(this).html(text1.replace('<br>', ','));
						$(this).css({'font-size':'1vw','left': '25.15%', 'bottom': ($(window).height() / 100) * 5.15, 'letter-spacing': '-0.026vw', 'line-height':'1.3em', 'display':'inline-block'});
					};
				});
			};
		};
	});
	/*****브라우저 화면 크기 변경 시 레이아웃 리사이징 실행 종료*****/

	$(window).scroll(function() {$(window).scrollLeft(-100);});
});
//console.log("$(document).ready(function() : " + $(window).height() - $('.titleimagewrapper3 img').height());
/* 레이아웃 리사이징 - 브라우저 사이즈가 변경될 시 각종 오브젝트의 설정 변경 */
function resizeLayout() {
	if($('section:nth-of-type(4)').width() <= $('section:nth-of-type(4)').height()){
		$('section:nth-of-type(4)').css('height', $('section:nth-of-type(4)').width());
		//$('.contextTitle1').css('bottom', '20%');
	}else{
		$('section:nth-of-type(4)').css('height', '100%');
		//$('.contextTitle1').css('bottom', '42%');
	};
	/*상단 화면이 표출될때만 동작*/

	//로고 및 기타 메뉴 표출
	$('.logo, .logo_Context').each(function(){
		// 브라우저 가로 사이즈에 따른 작동
		if($(window).width() <= 1590){
			$('.logo').css('left', '2.84%');
			$('.logo_Context').css('left', '3.1%');
			$('.menu_Container_Pc').css('left', '8%');
			$('.etc_Menu_Container').each(function(){
				if($(window).width() <= 1590){
					$(this).css('left', '4.5%');
					if($(window).width() <= 860){
						$(this).css('left', '2%');
						if($(window).width() <= 620){
							$(this).css('left', '-5%');
							if($(window).width() <= 550){ $(this).css('left', '-1000px'); };
						};
					};
				};
			});
			if($(window).width() <= 1138){
				$('.logo, .logo_Context').css('display', 'none');
			}else{
				$('.logo, .logo_Context').css('display', 'inline-block');
			};
		}else{
			$('.logo').css('left', '45px');
			$('.logo_Context').css('left', '49px');
			$('.menu_Container_Pc').css('left', '128px');
			$('.etc_Menu_Container').css('left', '72px');
		};
		// 브라우저 세로 사이즈에 따른 작동
		if($(window).height() <= 520){
			$('.etc_Menu_Container').css('display', 'none');
		}else{
			$('.etc_Menu_Container').css('display', 'block');
		};
	});

	if($('.title_Section').hasClass('section_Active')){
		if($(window).width() <= 1590){
			/*오브젝트 설정이 반응형인 경우 변경*/
			if($('.title_Section').hasClass('title_Layout1')){
				$('.title_Section').removeClass('title_Layout1').addClass('title_Layout2');

				$('h1').css({'font-size':'8.2vw', 'letter-spacing':'-0.1vw', 'line-height':'9.3vw', 'margin-left':'26%'});
				$('h2').css({'font-size':'4.25vw', 'letter-spacing':'0.016vw', 'line-height':'9.3vw', 'margin-left':'30.5%'});
				$('.title_VerticalLine1').css('left', '20.55%');
				$('.title_VerticalLine2').css('left', '60.2%');
				//상단화면 이미지 - 브라우저 크기 별 위치지정
				$('.titleimagewrapper1').css({'width':'30.45%','float':'left', 'margin':$(window).height() - $('.titleimagewrapper1 img').height() + (($('.titleimagewrapper1 img').height() / 100) * 28.9) + "px 0px 0px -" + ($('.titleimagewrapper1 img').width() / 100) * 87.2 + 'px'});
				$('.titleimagewrapper2').css({'width':'30.45%','float':'left', 'margin':'-33.8% 0 0 25.2%'});
		        $('.titleimagewrapper3').css({'width':'30.45%','float':'right', 'margin':$(window).height() - $('.titleimagewrapper3 img').height() + (($('.titleimagewrapper3 img').height() / 100) * 7.4) + "px 4.38% 0 0", 'right': '0'});
		        //상단화면 우측 상단 문구 - 브라우저 크기에 따른 문구표출
		        $('.title_context1').each(function(){
					if($(window).width() <= 1200){
						$(this).css('display', 'none');
					}else{
						$(this).css({'display':'block', 'font-size':'1.18vw','right': '4.31%','left': 'auto', 'top':$(window).height() - $('.titleimagewrapper3 img').height() + (($('.titleimagewrapper3 img').height() / 100) * 3.2), 'letter-spacing': '-0.03vw'});
					};
				});
				//상단화면 하단 문구 - 브라우저 크기에 따른 문구표출
				$('.title_context2_1').css({'font-size':'1.26vw','left': '25.15%', 'bottom': ($(window).height() / 100) * 7.9, 'letter-spacing': '-0.03vw'});
				$('.title_context2_2').each(function(){
					var text1 = $(this).html();
					if($(window).width() <= 900){
						$(this).html(text1.replace(',', '<br>'));
						$(this).css({'font-size':'1vw','left': '25.15%', 'bottom': ($(window).height() / 100) * 3, 'letter-spacing': '-0.026vw', 'line-height':'2.25vh'});
						if($(window).height() <= 518){$(this).css('display','none')}else{$(this).css('display','inline-block')};
					}
					else{
						$(this).html(text1.replace('<br>', ','));
						$(this).css({'font-size':'1vw','left': '25.15%', 'bottom': ($(window).height() / 100) * 5.15, 'letter-spacing': '-0.026vw', 'line-height':'1.3em', 'display':'inline-block'});
					};
				});
				$('.lower_ScrollButton').css('left', '52%');
			};
		}else{
			/*오브젝트 설정이 고정형인 경우 변경*/
			if($('.title_Section').hasClass('title_Layout2')){
				$('.title_Section').removeClass('title_Layout2').addClass('title_Layout1');
				$('h1').css({'font-size':'8.1em', 'letter-spacing':'-0.01em', 'line-height':'1.15em', 'margin-left':'415px'});
				$('h2').css({'font-size':'4.35em', 'letter-spacing':'-0.006em', 'line-height':'2.15em', 'margin-left':'484px'});
				$('.title_VerticalLine1').css('left', '327px');
				$('.title_VerticalLine2').css('left', '957px');
				$('.titleimagewrapper1').css({'width':'484px','float':'left', 'margin':'392px 0px 0px -422px'});
				$('.titleimagewrapper2').css({'width':'484px','float':'left', 'margin':'-537px 0 0 401px'});
				$('.titleimagewrapper3').css({'width':'484px','float':'left', 'margin':'262px 0 0 1036px', 'right': 'auto'});
				$('.title_context1').css({'font-size':'1.18em','right': 'auto','left': '1254px', 'top': '231px', 'letter-spacing': '-0.023em'});
				$('.title_context2_1').css({'font-size':'1.25em','left': '400px', 'bottom': '72px', 'letter-spacing': '-0.023em'});
				$('.title_context2_2').css({'font-size':'1em','left': '400px', 'bottom': '48px', 'letter-spacing': '-0.029em'});
				$('.lower_ScrollButton').css('left', '904px');
			};
		};
	};
};