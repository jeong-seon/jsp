<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="/whistle/resources/css/w3.css">
<link rel="stylesheet" type="text/css" href="/whistle/resources/css/base.css">
<script type="text/javascript" src="/whistle/resources/js/jquery-3.6.0.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$('#obtn').click(function(){
			$(location).attr('href', '/whistle/test/logout.pink');
		});
	});
</script>
</head>
<body>
	<c:if test="${not empty SID}">
		<h1 style="text-align: center;">Hello ${SID}</h1>	
	</c:if>
	<c:if test="${empty SID}">
		<h1 style="text-align: center;">Hello JSP!</h1>	
	</c:if>
	<div class="w3-content mx650">
		<div class="w3-col m2 w3-button w3-red" id="obtn">Logout</div>
	</div>
</body>
</html>