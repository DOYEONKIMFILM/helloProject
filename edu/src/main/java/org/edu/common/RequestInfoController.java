package org.edu.common;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RequestInfoController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/html;charset=utf-8");

		PrintWriter out = resp.getWriter(); // 2byte char type : stream: 1 byte
		out.print("<h2>요청정보</h2>");
		out.print("<h3>요청컨텐츠: " + req.getContentType() + "</h3>");
		out.print("<h3>요청방식: " + req.getMethod() + "</h3>");
		out.print("<h3>요청url: " + req.getRequestURI() + "</h3>");
		out.print("<h3>요청세션: " + req.getSession() + "</h3>");

		// 새로고침 -> 링크페이지로 간다
		resp.sendRedirect("index.jsp");

	}

}
