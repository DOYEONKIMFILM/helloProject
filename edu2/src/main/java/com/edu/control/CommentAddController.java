package com.edu.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.dao.CommentDAO;
import com.edu.model.CommentVO;

public class CommentAddController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 사용자 등록 값 -> 데이터 입력 -> commentList.jsp
		req.setCharacterEncoding("UTF-8");

		String name = req.getParameter("name");
		String content = req.getParameter("content");

		CommentDAO dao = new CommentDAO();
		
		CommentVO vo = dao.insertComment(name, content);
		req.setAttribute("comment", vo);
		
		//댓글 전체 가져오기
		List <CommentVO> list = dao.selectAll(); 
		req.setAttribute("commentList", list);

		RequestDispatcher rs = req.getRequestDispatcher("comment/commentList.jsp");
		rs.forward(req, resp);
	}

}
