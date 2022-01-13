package org.edu.comment;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.edu.common.DAO;

public class CommentDAO extends DAO {
	// sql을 연결하여 작업하는 공간의 클래스

	// 글 등록
	public CommentVO insertComment(String name, String content) {
		String sql = "select value from id_repository where name = 'COMMENT'";
		String insertSql = "INSERT INTO comments VALUES(?,?,?)";
		String updateSql = "UPDATE id_repository SET value = ? WHERE name = 'COMMENT'";
		CommentVO comment = null;
		connect();
		try {
			// 시퀀스 가져오기
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			int seq = -1;
			if (rs.next()) {
				seq = rs.getInt("value"); // 시퀀스값
			}

			// 한건 입력
			psmt = conn.prepareStatement(insertSql);
			psmt.setInt(1, seq);
			psmt.setString(2, name);
			psmt.setString(3, content);
			int r = psmt.executeUpdate();
			System.out.println(r + "건이 등록되었습니다.");

			comment = new CommentVO();
			comment.setId(seq);
			comment.setName(name);
			comment.setContent(content);

			psmt = conn.prepareStatement(updateSql);
			psmt.setInt(1, ++seq);

			r = psmt.executeUpdate();

			if (r < 1) {
				return null; // 비정상적으로 처리일 때
			}
			return comment; // 정상적으로 처리가 되었을 때

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return null;
	}

	
	// 전체목록 가져오기!
	public List<CommentVO> selectAll() {
		String sql = "SELECT * FROM comments ORDER BY 1";
		connect();
		List<CommentVO> list = new ArrayList<CommentVO>();

		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();

			while (rs.next()) {
				CommentVO vo = new CommentVO();
				vo.setId(rs.getInt("id"));
				vo.setName(rs.getString("name"));
				vo.setContent(rs.getString("content"));
				list.add(vo);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;

	}

}
