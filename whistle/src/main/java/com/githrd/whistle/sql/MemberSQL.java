package com.githrd.whistle.sql;

public class MemberSQL {
	public final int SEL_LOGIN_CNT		= 1001;
	public final int SEL_DETAIL_LIST	= 1002;
	public final int SEL_AVT_INFO		= 1003;
	public final int SEL_ALL_AVT		= 1004;
	public final int SEL_IDCK_CNT		= 1005;
	
	public final int ADD_MEMBER			= 3001;
	
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
		case SEL_IDCK_CNT:
			buff.append("SELECT ");
			buff.append("	COUNT(*) cnt ");
			buff.append("FROM ");
			buff.append("	member ");
			buff.append("WHERE ");
			buff.append("	isshow = 'Y' AND ");
			buff.append("	id = ? ");
			break;
		case SEL_AVT_INFO:
			buff.append("SELECT ");
			buff.append("	ano, savename, dir, gen ");
			buff.append("FROM ");
			buff.append("	avatar ");
			buff.append("WHERE ");
			buff.append("	isshow = 'Y' AND ");
			buff.append("	ano = ? ");
			break;
		case SEL_ALL_AVT:
			buff.append("SELECT ");
			buff.append("	ano, savename, gen ");
			buff.append("FROM ");
			buff.append("	avatar ");
			buff.append("WHERE ");
			buff.append("	isshow = 'Y' AND ");
			buff.append("	gen != 'N' ");
			break;
		case SEL_DETAIL_LIST:
			buff.append("SELECT ");
			buff.append("    mno, name, id, mail, tel, joindate, m.gen gen, savename ");
			buff.append("FROM ");
			buff.append("    member m, avatar a ");
			buff.append("WHERE ");
			buff.append("    m.avt = a.ano AND ");
			buff.append("    id = ? ");
			break;
		case ADD_MEMBER:
			buff.append("INSERT INTO ");
			buff.append("	member(mno, name, id, pw, mail, tel, avt, gen) ");
			buff.append("VALUES ( ");
			buff.append("	(SELECT NVL(MAX(mno) + 1, 1001) FROM member), ");
			buff.append("	?, ?, ?, ?, ?, ?, ? ");
			buff.append(") ");
			break;
		}
		return buff.toString();
	}
}
