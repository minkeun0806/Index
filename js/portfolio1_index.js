$(document).ready(function() {
	// 페이지 하단 연도 변수 정의
	var currentDate = new Date(),
		currentYear = currentDate.getFullYear();

	// 페이지 하단 연도 표기
	$('#footer_Copyright_Year').html(currentYear);


	$(window).on('resize', function(){

	});
});

