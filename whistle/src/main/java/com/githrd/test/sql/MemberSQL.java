package com.githrd.test.sql;

public class MemberSQL {
	public final int SEL_LOGIN_CNT	= 1001;
	public final int SEL_ID_LIST	= 1002;
	
	public String getSQL(int code) {
		StringBuffer buff = new StringBuffer();
		
		switch(code) {
		case SEL_LOGIN_CNT:
			buff.append("SELECT ");
			buff.append("	COUNT(*) cnt ");
			buff.append("FROM ");
			buff.append("	member ");
			buff.append("WHERE ");
			buff.append("	isshow = 'Y' AND ");
			buff.append("	id = ? AND ");
			buff.append("	pw = ? ");
			break;
		case SEL_ID_LIST:
			buff.append("SELECT ");
			buff.append("	id ");
			buff.append("FROM ");
			buff.append("	member ");
			buff.append("WHERE ");
			buff.append("	isshow = 'Y' ");
			break;
		}
		return buff.toString();
	}
}
