package com.githrd.test.db;

import java.sql.*;
public class JennieJDBC {

	// Driver Loading
	public JennieJDBC() {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			
		} catch (Exception e) {
			System.out.println("### 드라이버 로딩 실패 ###");
		}
	}
	
	// Connection..
	public Connection getCon() {
		Connection con = null;
		
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		String user = "jennie";
		String pw = "12345";
		
		try {
			con = DriverManager.getConnection(url, user, pw);
		} catch (Exception e) {}
		
		return con;
	}
	
	// Statement Setting
	public Statement getStmt(Connection con) {
		Statement stmt = null;
		
		try {
			stmt = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
		} catch (Exception e) {}
		
		return stmt;
	}
	
	// PreparedStatement Setting
	public PreparedStatement getPstmt(Connection con, String sql) {
		PreparedStatement pstmt = null;
		
		try {
			pstmt = con.prepareStatement(sql, ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
		} catch (Exception e) {}
		
		return pstmt;
	}
	
	public void close(Object o) {
		try {
			if (o instanceof Connection) {
				((Connection) o).close();
			} else if (o instanceof Statement) {
				((Statement) o).close();
			} else if (o instanceof PreparedStatement) {
				((PreparedStatement) o).close();
			} else if (o instanceof ResultSet) {
				((ResultSet) o).close();
			}
		} catch (Exception e) {}
	}

}
