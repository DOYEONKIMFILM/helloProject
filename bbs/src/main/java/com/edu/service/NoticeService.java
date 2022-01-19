package com.edu.service;

import java.util.List;

import com.edu.vo.NoticeVO;

public interface NoticeService {
		// 전체조회
		public List<NoticeVO> selectList();

		// 한건조회
		public NoticeVO selectOne(int ntcId);

		// 등록
		public NoticeVO insert(NoticeVO vo);

		// 수정
		public NoticeVO update(NoticeVO vo);

		// 삭제
		public int delete(int ntcId);
}
