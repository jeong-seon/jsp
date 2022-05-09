<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>GuGuDan</title>
<link rel="stylesheet" type="text/css" href="/whistle/resources/css/w3.css">
<link rel="stylesheet" type="text/css" href="/whistle/resources/css/base.css">
</head>
<body>
<%
	String[] color = new String[]{
			"w3-pink", "w3-purple", "w3-deep-purple", "w3-indigo",
			"w3-blue", "w3-aqua", "w3-teal", "w3-green"
			
	};
%>
	<div class="w3-content mx650 w3-center">
		<h1 class="w3-pink w3-padding">구구단</h1>
		<!--
			스크립트 릿 방식을 이용해서 구구단을 출력하세요.
		 -->
		 <%
		 	for(int i = 2; i <= 9; i++){
		 %>
			 	<div class="box w3-border w3-card-4 w3-margin-top ml10 w135" style="padding-bottom: 10px;">
				 	<h3 class="w3-col w3-padding <%= color[i-2]%>" style="margin-top: 0px;"><%= i %>단</h3>
		 <%
		 		for(int j = 1; j <= 9; j++){		 			
		 %>
			 		<h4><%= i %> x <%= j %> = <%= (i * j) %></h4>
		 <%
		 		}
		 %>
		 		</div>
		 <%
		 	}
		 %>
	</div>
</body>
</html>