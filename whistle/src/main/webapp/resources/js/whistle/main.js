$(function(){
	$('#jbtn').click(function(){
		$(location).attr('href', '/whistle/member/join.blp');
	});
	$('#lbtn').click(function(){
		$(location).attr('href', '/whistle/member/login.blp');
	});
	$('#obtn').click(function(){
		$(location).attr('href', '/whistle/test/logout.pink');
	});
	$('#cbtn').click(function(){
		$('#detail').css('display', 'none');
	});
	$('#ibtn').click(function(){
		if('${SID}' != null){
			$.ajax({
				url: '/whistle/test/myInfo.pink',
				type: 'POST',
				dataType: 'json',
				data: {
					id: '${SID}'
				},
				success: function(obj){
					var mno = obj.mno;
					var name = obj.name;
					var id = obj.id;
					var mail = obj.mail;
					var tel = obj.tel;
					var jdate = obj.joindate;
					var gen = obj.gen == 'M' ? '남자':'여자';
					var savename = obj.savename;
					
					$('#avtimg').attr('src', '/whistle/resources/img/avatar/' + savename);
					$('#mno').html(mno);
					$('#mname').html(name);
					$('#mid').html(id);
					$('#mmail').html(mail);
					$('#mtel').html(tel);
					$('#mdate').html(jdate);
					$('#mgen').html(gen);
					
					$('#detail').css('display', 'block');
				},
				error: function(request, status, error){
					alert('code = ' + request.status + ' message = ' + request.responseText + ' error = ' + error);
					alert('### 통신 에러 ###');
				}
			});
		}
	});
});