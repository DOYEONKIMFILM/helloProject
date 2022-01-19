package com.edu.service;

import java.util.List;

import com.edu.vo.BulletinVO;

public interface BulletinService {

	// 전체조회
	public List<BulletinVO> selectList();

	// 한건조회
	public BulletinVO selectOne(int bbsId);

	// 등록
	public BulletinVO insert(BulletinVO vo);

	// 수정
	public BulletinVO update(BulletinVO vo);

	// 삭제
	public int delete(int bbsId);

}
