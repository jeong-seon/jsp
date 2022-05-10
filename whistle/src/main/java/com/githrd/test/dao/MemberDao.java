package com.githrd.test.dao;

import java.sql.*;

import com.githrd.test.db.*;
import com.githrd.test.sql.*;
//import com.githrd.test.vo.*;

public class MemberDao {
	private JennieJDBC db;
	private Connection con;
//	private Statement stmt;
	private PreparedStatement pstmt;
	private ResultSet rs;
	private MemberSQL mSQL;
	
	public MemberDao() {
		db = new JennieJDBC();
		
		mSQL = new MemberSQL();
	}
	
	public int getLoginCnt(String id, String pw) {
		// 반환값 변수
		int cnt = 0;
		// 작업순서
		// 1. 커넥션 가져오고
		con = db.getCon();
		// 2. 질의명령 가져오고
		String sql = mSQL.getSQL(mSQL.SEL_LOGIN_CNT);
		// 3. 명령전달도구 꺼내오고
		pstmt = db.getPstmt(con, sql);
		
		try {
			// 4. 질의명령 완성하고
			pstmt.setString(1, id);
			pstmt.setString(2, pw);
			// 5. 질의명령 보내고 결과받고
			rs = pstmt.executeQuery();
			// 6. 결과에서 데이터 꺼내고
			rs.next();
			cnt = rs.getInt("cnt");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			db.close(rs);
			db.close(pstmt);
			db.close(con);
		}
		// 7. 데이터 반환
		return cnt;
	}
}
