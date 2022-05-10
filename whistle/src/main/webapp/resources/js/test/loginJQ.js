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
		
		var pwpat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#-*_$])([a-zA-Z0-9!@#-*_$]{4,10})$/;
		var pwResult = pwpat.test(spw);
		if(!pwResult){
			alert('형식에 맞지 않은 비밀번호입니다.');
			$('#pw').val('');
			$('#pw').focus();
			return;
		}
		
		// 이 행을 실행하는 경우는 입력한 데이터가 사용 가능한 데이터인 경우이므로
		$('#frm').attr('action', '/whistle/test/loginProc.pink');
		$('#frm').submit();
	});
	
	// ajax 처리버튼 클릭이벤트
	$('#abtn').click(function(){
		// 할일
		// 데이터 유효성검사
		var sid = $('#id').val();
		if(!sid){
			alert('아이디는 필수 입력사항입니다!');
			$('#id').focus();
			return;
		}
		var spw = $('#pw').val();
		if(!spw){
			alert('비밀번호를 입력하세요!');
			$('#pw').focus();
			return;
		}
		
		// 정규표현식 검사
		var idpat = /^[a-zA-Z0-9]{4,10}$/;
		var idResult = idpat.test(sid);
		if(!idResult){
			alert('형식에 맞지 않은 아이디입니다.');
			$('#id').val('');
			$('#id').focus();
			return;
		}
		
		var pwpat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#-*_$])([a-zA-Z0-9!@#-*_$]{4,10})$/;
		var pwResult = pwpat.test(spw);
		if(!pwResult){
			alert('형식에 맞지 않은 비밀번호입니다.');
			$('#pw').val('');
			$('#pw').focus();
			return;
		}
		
		// 데이터가 유효하므로 폼을 비동기 통신으로 전송한다.
		$.ajax({
			url: '/whistle/test/loginAjax.pink',
			type: 'POST',
			dataType: 'json',
			data: {
				id: sid,
				pw: spw
			},
			success: function(obj){
				// var obj = {"result": "OK"} 또는
				// var obj = {"result": "NO"}
				var result = obj.result;
				if(result == 'OK'){
					// 로그인 처리 해줘야 하는 경우
					alert(sid + ' 회원님은 로그인 처리 되었습니다.');
					// 요청을 새롭게 만든다.
					$(location).attr('href', '/whistle');
				} else {
					// 다시 로그인 해야 하는 경우
					alert('로그인에 실패했습니다. 다시 입력하세요!');
					// 입력태그의 내용 모두 지우고
					document.frm.reset();
					$('#id').focus();
				}
			},
			error: function(){
				alert('### 통신 실패 ###');
			}
		});
		
	});
});