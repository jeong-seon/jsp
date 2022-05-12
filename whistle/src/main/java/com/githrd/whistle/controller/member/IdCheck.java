package com.githrd.whistle.controller.member;

import java.io.*;

import javax.servlet.*;
import javax.servlet.http.*;

import com.githrd.whistle.controller.BlpInter;
import com.githrd.whistle.dao.*;

public class IdCheck implements BlpInter {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setAttribute("isRedirect", null);
		String sid = req.getParameter("id");
		MemberDao mDao = new MemberDao();
		int cnt = mDao.getIdCnt(sid);
		
		PrintWriter pw = null;
		try {
			pw = resp.getWriter();
			pw.println("{");
			if(cnt != 0) {
				pw.println("\"result\": \"NO\"");
			} else {
				pw.println("\"result\": \"OK\"");
			}
			pw.println("}");
			
		} catch(Exception e) {}
		return null;
	}

}
