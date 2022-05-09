$(document).ready(function(){
	$('#hbtn').click(function(){
		$(location).attr('href', '/black/');
	});
	
	$('#rbtn').click(function(){
		document.frm.reset();
	});
	
	$('#jbtn').click(function(){
		var el = $('.ck');
		for(var i = 0; i < el.length; i++){
			var tmp = el.eq(i).val();
			if(!tmp){
				el.eq(i).focus();
				alert(el.eq(i).attr('id') + ' 값을 입력해주세요 !');
				return;
			}
		}
		var gen = $('input[name="gen"]:checked').val();
		var avt = $('input[name="avt"]:checked').val();
		if(!gen){
			alert('성별을 선택해주세요 !');
			return;
		}
		if(!avt){
			alert('아바타를 선택해주세요 !');
			return;
		}
		document.frm.submit();
		alert('회원가입이 성공적으로 완료되었습니다 !');
	});
	
	$('#idbtn').click(function(){
		var sid = $('#id').val();
		var idPat = /^[a-zA-Z0-9]{4,10}$/;
		var idResult = idPat.test(sid);
		
		if(!sid){
			return;
		}
		
		$.ajax({
			url: '/black/idCheck.pink',
			type: 'POST',
			dataType: 'json',
			data: {
				id: sid
			},
			success: function(data){
				var result = data.result;
				if(result == 'OK'){
					if(idResult){
						$('#ckid').attr('class', 'w3-text-blue').html('사용 가능한 아이디 입니다.');
					} else {
						$('#ckid').attr('class', 'w3-text-red').html('아이디 형식을 다시 확인하십시오!');
						$('#id').val('');
					}
				} else {
					$('#ckid').attr('class', 'w3-text-red').html('### 이미 사용중인 아이디 입니다. ###');
					$('#id').val('');
				}
			},
			error: function(){
				alert('### 통신 에러 ###');
			}
		});
	});
	
	$('#pw').focus(function(){
		$('#txtckpw').attr('class', 'w3-text-gray');
		$('#txtckpw').html('* 비밀번호 형식 : 영문 대소문자 각 1글자, 숫자 1글자를 포함 *' + '<br>' + '4글자 이상 10글자 이하로 입력하세요!');
	});
	
	$('#pw').focusout(function(){
		$('#txtckpw').removeClass();
		$('#txtckpw').html('');
	});
		
	$('#ckpw').keyup(function(){
		var pw = $('#pw').val();
		var ckpw = $('#ckpw').val();
		var pwPat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,10}$/;
		var pwResult = pwPat.test(pw);
		
		if(!pw){
			return;
		}
		if(pw == ckpw){
			if(pwResult){
				$('#txtckpw').attr('class', 'w3-text-blue');
				$('#txtckpw').html('비밀번호가 일치합니다 !');				
			} else {
				$('#txtckpw').attr('class', 'w3-text-red');
				$('#txtckpw').html('비밀번호 형식에 맞지 않습니다 !');
			}
		} else {
			$('#txtckpw').attr('class', 'w3-text-red');
			$('#txtckpw').html('비밀번호가 일치하지 않습니다 !');			
		}
		
	});
	
	$('#mail').focus(function(){
		var mail = $('#mail').val();
		if(mail){
			return;
		} else {
			$('#ckmail').attr('class', 'w3-text-gray');
			$('#ckmail').html('* 이메일 형식 : 영문 대소문자 및 숫자 4 ~ 10글자 (@ 이전) *');			
		}
	});
	
	$('#mail').change(function(){
		var smail = $('#mail').val();
		var mailPat = /^[a-zA-Z0-9]{4,10}[@].*$/;
		var mailResult = mailPat.test(smail);
		
		if(!smail){
			return;
		}
		if(mailResult){
			$('#ckmail').attr('class', 'w3-text-blue');
			$('#ckmail').html('이메일 형식에 일치합니다 !');
		} else {
			$('#ckmail').attr('class', 'w3-text-red');
			$('#ckmail').html('이메일 형식에 일치하지 않습니다. 다시 입력해주세요 !');
			$('#mail').val('');
		}
	});

	$('#tel').focus(function(){
		var tel = $('#tel').val();
		if(tel){
			return;
		} else {
			$('#cktel').attr('class', 'w3-text-gray');
			$('#cktel').html('* 전화번호 형식 : [010-????-????] 형식으로 작성하세요 *');
		}
	});
	
	$('#tel').change(function(){
		var stel = $('#tel').val();
		var telPat = /^010-[0-9]{4}-[0-9]{4}$/;
		var telResult = telPat.test(stel);
		
		if(!stel){
			return;
		}
		if(telResult){
			$('#cktel').attr('class', 'w3-text-blue');
			$('#cktel').html('전화번호 형식에 일치합니다 !');
		} else {
			$('#cktel').attr('class', 'w3-text-red');
			$('#cktel').html('전화번호 형식에 일치하지 않습니다. 다시 입력해주세요 !');
			$('#tel').val('');
		}
	});
	
	$('#mgen').click(function(){
		$('#avtlb').slideDown();
		$('.manavt').slideDown();
		$('.womanavt').css('display', 'none');
	});
	
	$('#fgen').click(function(){
		$('#avtlb').slideDown();
		$('.womanavt').slideDown();
		$('.manavt').css('display', 'none');
	});
});
