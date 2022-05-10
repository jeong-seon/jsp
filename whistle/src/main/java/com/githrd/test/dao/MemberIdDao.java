package com.githrd.test.dao;

import java.sql.*;
import java.util.*;

import com.githrd.test.db.*;
import com.githrd.test.sql.*;
import com.githrd.test.vo.*;

public class MemberIdDao {
	private JennieJDBC db;
	private Connection con;
	private Statement stmt;
	private PreparedStatement pstmt;
	private ResultSet rs;
	private MemberSQL mSQL;
	
	public MemberIdDao() {
		db = new JennieJDBC();
		
		mSQL = new MemberSQL();
	}
	
	public ArrayList<String> getIdList(){
		ArrayList<String> list = new ArrayList<String>();
		con = db.getCon();
		String sql = mSQL.getSQL(mSQL.SEL_ID_LIST);
		stmt = db.getStmt(con);
		try {
			rs = stmt.executeQuery(sql);
			while(rs.next()) {
				list.add(rs.getString("id"));
			}
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			db.close(rs);
			db.close(stmt);
			db.close(con);
		}
		return list;
	}
}
