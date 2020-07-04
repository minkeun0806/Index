$(document).ready(function() {
	// 페이지 하단 연도 변수 정의
	var currentDate = new Date(),
		currentYear = currentDate.getFullYear();

	// 페이지 하단 연도 표기
	$('#footer_Copyright_Year').html(currentYear);


	$(window).on('resize', function(){

	});

	//PC UI 메뉴 hover 이벤트
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

