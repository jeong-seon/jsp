$(document).ready(function(){
	$(document.frm.gen).change(function(){
		var sgen = $(this).val();
		$('#avtfr').stop().slideUp(500, function(){
			if(sgen == 'M'){
				$('#favt').css('display', 'none');
				$('#mavt').css('display', 'block');
				$('#avtfr').stop().slideDown(500);
			} else {
				$('#mavt').css('display', 'none');
				$('#favt').css('display', 'block');
				$('#avtfr').stop().slideDown(500);
			}
		});
	});
	$('#hbtn').click(function(){
		$(location).attr('href', '/whistle/');
	});
	$('#rbtn').click(function(){
		frm.reset();
		$('#avtfr').css('display', 'none');
	});
	$('#jbtn').click(function(){
		
	});
	
	/*
	$('#idck').click(function(){
		var sid = $('#id').val();
		if(!sid){
			return;
		}
		$.ajax({
			url: null,
			type: 'POST',
			dataType: 'json',
			data: {
				id: sid
			},
			success: function(data){
				var result = data.result;
				if(result == 'OK'){
					$('#idmsg').attr('class', 'w3-text-blue').html('사용가능한 아이디입니다.');
				} else {
					$('#idmsg').attr('class', 'w3-text-red').html('사용 불가능한 아이디입니다.');
					$('#id').val('');
				}
			},
			error: function(){
				alert('### 통신 에러 ###');
			}
		});
	});
	*/
});