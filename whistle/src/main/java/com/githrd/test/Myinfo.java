package com.githrd.test;

import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.*;

@WebServlet("/test/detail.pink")
public class Myinfo extends HttpServlet {
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();
		String sid = (String) session.getAttribute("SID");
		// 3. 검사
		if(sid != null) {
			// 이 경우는 이미 세션에 데이터가 채워져 있는 경우이고
			// 그 말은 이미 로그인 한 상태가 된다.
			// 따라서 메인페이지(index)로 돌려보낸다.
			// 이 작업은 지금 요청에서 메인페이지로 보내는 요청을 다시 만드는 작업.
			// 따라서 redirect 하면 된다.
			resp.sendRedirect("/whistle/");
		} else {
			String view = "/WEB-INF/views/test/index.jsp";
			RequestDispatcher rd = req.getRequestDispatcher(view);
			rd.forward(req, resp);
		}
	}

}
