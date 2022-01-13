package com.doyeon.memo;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.edu.common.DAO;

public class MemoDAOImpl extends DAO implements MemoDAO {

	@Override
	public List<Memo> selectAll() {
		List<Memo> list = new ArrayList<Memo>();
		try {
			connect();
			String sql = "SELECT * FROM memo ORDER BY 1";
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			
			while(rs.next()) {
				Memo memo = new Memo();
				memo.setId(rs.getInt("id"));
				memo.setName(rs.getString("name"));
				memo.setContent(rs.getString("content"));
				
				list.add(memo);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}

//	@Override
//	public void insert(Memo memo) {
//		try {
//			connect();
//
//		} catch (SQLException e) {
//			e.printStackTrace();
//		} finally {
//			disconnect();
//		}
//
//	}
}
