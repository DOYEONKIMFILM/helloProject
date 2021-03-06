package com.edu.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;

public class MainController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		 String welcome = "반갑습니다!";
		 req.setAttribute("msg", welcome);
		req.getRequestDispatcher("member/memberList.tiles").forward(req, resp);

	}

}
