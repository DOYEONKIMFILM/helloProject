package com.edu.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.edu.common.Controller;
import com.edu.dao.MemberDAO;
import com.edu.model.MemberVO;

public class LoginController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String id = req.getParameter("id");
		String pw = req.getParameter("passwd");

		MemberDAO dao = new MemberDAO();
		MemberVO member = dao.loginCheck(id, pw);

		req.setAttribute("sid", id);
		req.setAttribute("member", member);

		// 로그인 정보가 있으면
		if (member != null) {
			HttpSession session = req.getSession(); // 클라이언트 당 하나씩 만들어지는 세션정보
			session.setAttribute("login", member);
		}
		req.getRequestDispatcher("index.jsp").forward(req, resp);

	}

}
