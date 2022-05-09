$(document).ready(function(){
	$('#rbtn').click(function(){
		// 리셋버튼 처리
		document.frm.reset();
	});
	
	$('#lbtn').click(function(){
		$('#frm').submit();
	});
});