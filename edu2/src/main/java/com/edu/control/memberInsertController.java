package com.edu.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.dao.MemberDAO;
import com.edu.model.MemberVO;

public class memberInsertController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// resp.sendRedirect("member/memberInsert.jsp");

		
		// 2022.01.17 members 테이블 강의
		// 사용자 입력값을 읽고 디비에 반영 후 결과 => 결과페이지 전송
		String id = req.getParameter("id");	// id = user1
		String passwd = req.getParameter("passwd"); // passwd = 1234
		String name = req.getParameter("name"); // name = 사용자1
		String mail = req.getParameter("mail"); // mail = emial.com etc...
		
		MemberVO vo = new MemberVO();
		vo.setId(id);
		vo.setPasswd(passwd);
		vo.setName(name);
		vo.setMail(mail);
		
		MemberDAO dao = new MemberDAO();
		dao.insertMember(vo);
		
		req.setAttribute("member", vo);
		
		// 어떤페이지로 요청정보를 재지정할것인가?
		req.getRequestDispatcher("memberResult/memberInsertOutput.jsp").forward(req, resp);
		

	}

}
