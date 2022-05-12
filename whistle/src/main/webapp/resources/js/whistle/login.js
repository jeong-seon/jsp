// jQuery 방식
$(document).ready(function(){
	// home 버튼 클릭 이벤트
	$('#hbtn').click(function(){
		$(location).attr('href', '/whistle/');
	});
	// 리셋버튼 클릭이벤트
	$('#rbtn').click(function(){
		$('input').val('');
	});
	
	// 로그인버튼 클릭이벤트
	$('#lbtn').click(function(){
		var sid = $('#id').val();
		if(!sid){
			alert('아이디가 입력되지 않았습니다!');
			$('#id').focus();
			return;
		}
		var spw = $('#pw').val();
		if(!spw){
			alert('비밀번호를 입력하세요!');
			$('#pw').focus();
			return;
		}
		var idpat = /^[a-zA-Z0-9]{4,10}$/;
		var idResult = idpat.test(sid);
		if(!idResult){
			alert('형식에 맞지 않은 아이디입니다.');
			$('#id').val('');
			$('#id').focus();
			return;
		}
		
		/*
		var pwpat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#-*_$])([a-zA-Z0-9!@#-*_$]{4,10})$/;
		var pwResult = pwpat.test(spw);
		if(!pwResult){
			alert('형식에 맞지 않은 비밀번호입니다.');
			$('#pw').val('');
			$('#pw').focus();
			return;
		}
		*/
		
		// 이 행을 실행하는 경우는 입력한 데이터가 사용 가능한 데이터인 경우이므로
		$('#frm').attr('action', '/whistle/member/loginProc.blp');
		$('#frm').submit();
	});
});