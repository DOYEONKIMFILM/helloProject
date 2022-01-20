package com.edu.service;

import java.util.List;

import com.edu.vo.BulletinVO;
import com.edu.vo.ReplyVO;

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
	
	// 댓글관련 메소드
	// 한건 가져오기
	public List<ReplyVO> selectReplyList(int bbsId);
	
	// 입력
	public ReplyVO insertReply(ReplyVO vo);
	
	// 삭제
	public boolean deleteReply(int rid);
	
	

}
