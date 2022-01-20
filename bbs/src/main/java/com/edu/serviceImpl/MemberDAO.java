package com.edu.serviceImpl;

import java.sql.SQLException;
import java.util.List;

import com.edu.common.DAO;
import com.edu.service.MemberService;
import com.edu.vo.MemberVO;

public class MemberDAO extends DAO implements MemberService {

	@Override
	public boolean memberInsert(MemberVO vo) {
		return false;
	}

	@Override
	public boolean memberUpdate(MemberVO vo) {
		return false;
	}

	@Override
	public List<MemberVO> memberList() {
		return null;
	}

	@Override
	public MemberVO login(String id, String pw) {
		String sql = "select * from members where id = ? and passwd = ?";
		connect();
		MemberVO member = null;

		try {
			// id와 pw값을 가져온다.
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			psmt.setString(2, pw);
			rs = psmt.executeQuery();

			// 그 정보가 일치한다면 아래 값을 불러오고
			if (rs.next()) {
				member = new MemberVO();
				member.setId(rs.getString("id"));
				member.setPasswd(rs.getString("passwd"));
				member.setName(rs.getString("name"));
				member.setMail(rs.getString("mail"));
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return member; // 일치하지 않다면 리턴한다. member = null 인것을

	}

}
