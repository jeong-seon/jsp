package com.githrd.test;

import java.io.*;
import java.util.*;

import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.*;

import com.githrd.test.dao.*;


@WebServlet("/idList.pink")
public class IdList extends HttpServlet {
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		MemberIdDao midDao = new MemberIdDao();
		
		ArrayList<String> list = midDao.getIdList();
		
		PrintWriter pw = null;
		try {
			pw = resp.getWriter();
			String str = "";
			for(String name : list) {
				str += "\"" + name + "\",";
			}
			str = str.substring(0, str.lastIndexOf(','));
			pw.println("[");
			pw.println(str);
			pw.println("]");
		} catch(Exception e) {}
	}

}
