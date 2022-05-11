package com.githrd.test;

import java.io.*;

import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.*;

import com.githrd.test.dao.MemberDao;
import com.githrd.test.vo.*;


@WebServlet("/test/myInfo.pink")
public class MyinfoAjax extends HttpServlet {
	public void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// JSON 파일 한글깨짐 처리
		resp.setContentType("text/html; charset=UTF-8");
		
		MemberDao mDao = new MemberDao();
		HttpSession session = req.getSession();
		String sid = (String) session.getAttribute("SID");
		MemberVO mvo = mDao.getInfo(sid);
		
		PrintWriter pw = resp.getWriter();
		pw.println("{");
		pw.println("\"mno\": \"" + mvo.getMno() + "\",");
		pw.println("\"name\": \"" + mvo.getName() + "\",");
		pw.println("\"id\": \"" + sid + "\",");
		pw.println("\"mail\": \"" + mvo.getMail() + "\",");
		pw.println("\"tel\": \"" + mvo.getTel() + "\",");
		pw.println("\"joindate\": \"" + mvo.getSdate() + "\",");
		pw.println("\"gen\": \"" + mvo.getGen() + "\",");
		pw.println("\"savename\": \"" + mvo.getSavename() + "\"");
		pw.println("}");
		
	}
}
