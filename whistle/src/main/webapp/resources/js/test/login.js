// javascript 방식
// home 버튼 클릭 이벤트
document.getElementById('hbtn').onclick = function() {
	location.href = '/whistle/';
};
// 로그인버튼 클릭이벤트
document.getElementById('lbtn').onclick = function() {
	// 할 일
	// 데이터 유효성 검사를 한다.
	var sid = document.frm.id.value;	// name 속성값으로 접근하는 방법
	if(!sid){
		// 아이디를 꺼냈는데 꺼낸 데이터가 없으면(비어있으면)
		alert('아이디가 입력되지 않았습니다!');
		document.frm.id.focus();
		return;
	}
	var spw = document.getElementById('pw').value;
	if(!spw){
		alert('비밀번호를 입력하세요!');
		document.getElementById('pw').focus();
		return;
	}
	
	// 이 행을 실행하는 경우는 아이디와 비밀번호가 입력된 상태일 것이다.
	// 정규표형식 검사를 한다.
	var idpat = /^[a-zA-Z0-9]{4,10}$/;
	var idResult = idpat.test(sid);
	if(!idResult){
		alert('형식에 맞지 않은 아이디입니다.');
		document.frm.id.value = '';
		document.frm.id.focus();
		return;
	}
	
	var pwpat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#-*_$])([a-zA-Z0-9!@#-*_$]{4,10})$/;
	var pwResult = pwpat.test(spw);
	if(!pwResult){
		alert('형식에 맞지 않은 비밀번호입니다.');
		document.frm.pw.value = '';
		document.frm.pw.focus();
		return;
	}
	
	// 모든 데이터가 유효하므로 서버에 보낸다.
	document.frm.setAttribute('action', '/whistle/test/loginProc.pink');
	document.frm.submit();
};