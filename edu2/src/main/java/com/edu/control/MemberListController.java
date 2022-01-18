package com.edu.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.dao.MemberDAO;
import com.edu.model.MemberVO;

public class MemberListController implements Controller {


	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		String id = req.getParameter("id");
//		String pw = req.getParameter("pw");
//		
//		req.setAttribute("id", id);
//		req.setAttribute("pw", pw);
		
		MemberDAO dao = new MemberDAO();
		List<MemberVO> list = dao.getMemberList();
		
		req.setAttribute("memberList", list); //속성추가
		
		//resp.sendRedirect("member/memberList.jsp"); // -> 페이지 재지정
		req.getRequestDispatcher("memberResult/memberListOutput.jsp").forward(req, resp); //memberList.jsp페이지를 보여주세요
	}

}
