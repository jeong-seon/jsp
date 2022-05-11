<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>WhistleMain</title>
<link rel="stylesheet" type="text/css" href="/whistle/resources/css/w3.css">
<link rel="stylesheet" type="text/css" href="/whistle/resources/css/base.css">
<script type="text/javascript" src="/whistle/resources/js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/whistle/resources/js/whistle/main.js"></script>
<style>
	h5, span {
		height: 20px;
		line-height: 30%;
	}
	.pdh10 > h5 {
		font-size: 10.5pt;
	}
</style>
<script type="text/javascript">
	$(document).ready(function(){
		$('#lbtn').click(function(){
			$(location).attr('href', '/whistle/test/login.pink');
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
</script>
</head>
<body>
	<form method="POST" action="" id="frm" name="frm">
		<input type="hidden" id="id" name="id" value="${SID}">
	</form>
	<div class="w3-content w3-center mw700">
		<h1 class="w3-teal w3-padding" style="margin-bottom: 5px;">Whistle Project</h1>
		<div class="w3-col">
<c:if test="${empty SID}">
				<div class="w3-col w3-border-bottom pdb10">
					<span class="w3-col m2 w3-button w3-small w3-lime w3-hover-green w3-left" id="jbtn">Join</span>
					<span class="w3-col m2 w3-button w3-small w3-blue w3-hover-light-blue w3-right" id="lbtn">Login</span>
				</div>
</c:if>
				<div class="w3-col" id="btnfr">
<c:if test="${not empty SID}">
					<script type="text/javascript">
						alert('${SID} 님이 로그인했습니다.');
					</script>

					<div class="w3-col w3-border-bottom pdb10">
						<span class="w3-cell m2 w3-button w3-small w3-red w3-hover-light-green w3-right mt0" id="obtn">LogOut</span>
						<span class="w3-cell m2 w3-button w3-small w3-red w3-hover-light-green w3-left mt0" id="ibtn">회원정보</span>
					</div>
</c:if>

					
					<div class="w3-col mt10">
						<div class="w3-col m3 pdh10">
							<h5 class="w3-col w3-button w3-red w3-hover-amber" id="mlbtn">회원목록</h5>
						</div>
						<div class="w3-col m3 pdh10">
							<h5 class="w3-col w3-button w3-pink w3-hover-light-green" id="gbtn">방명록</h5>
						</div>
						<div class="w3-col m3 pdh10">
							<h5 class="w3-col w3-button w3-red w3-hover-light-green" id="sbtn">설문조사</h5>
						</div>

						<div class="w3-col m3 pdh10">
							<h5 class="w3-col w3-button w3-deep-orange w3-hover-light-green" id="irbtn">댓글쓰기</h5>
						</div>

						<div class="w3-col m3 pdh10">
							<h5 class="w3-col w3-button w3-orange w3-hover-light-green" id="rbtn">댓글게시판</h5>
						</div>
						<div class="w3-col m3 pdh10">
							<h5 class="w3-col w3-button w3-amber w3-hover-light-green" id="fbtn">파일게시판</h5>
						</div>
					</div>
				</div>
		</div>
	</div>
	<div id="detail" class="w3-modal">
    	<div class="w3-modal-content w3-animate-top w3-card-4" style="max-width: 700px;">
    		<header class="w3-container w3-blue"> 
    			<span id="cbtn" class="w3-button w3-display-topright">&times;</span>
        		<h2 class="w3-center">${SID} 회원정보 상세보기</h2>
      		</header>
      		<div class="w3-container w3-margin-top">
      			<div class="w3-col" style="position: relative; top: 40px; left: 60px; width: 300px; padding-right: 20px;">
      				<div class="box avtbox overhidden w3-circle w3-margin-bottom">
      					<img class="avtimg" src="/black/resources/img/avatar/img_avatar4.png" id="avtimg">
      				</div>
      			</div>
      			<div class="w3-rest">
      				<h5>회원번호 : <span id="mno"></span></h5>
      				<h5>회원이름 : <span id="mname"></span></h5>
      				<h5>아 이 디 : <span id="mid"></span></h5>
      				<h5>이 메 일 : <span id="mmail"></span></h5>
      				<h5>전화번호 : <span id="mtel"></span></h5>
      				<h5>가 입 일 : <span id="mdate"></span></h5>
      				<h5>회원성별 : <span id="mgen"></span></h5>
      			</div>
      		</div>
    	</div>
	</div>
</body>
</html>