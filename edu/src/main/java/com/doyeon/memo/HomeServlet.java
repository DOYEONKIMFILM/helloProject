package com.doyeon.memo;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HomeServlet extends HttpServlet {

	HashMap<String, Controller> list = null;

	// init() -> service() -> destroy() = 서블릿 생명주기

	@Override
	public void init() throws ServletException {
		list.put("/memo.do", new MemoController());
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		StringBuffer url = req.getRequestURL();
		String uri = req.getRequestURI();
		String contextPath = req.getContextPath();
		String path = uri.substring(contextPath.length());
		Controller controller = list.get(path);
		
		try {
			controller.execute(req, resp);
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

//	@Override
//	public void destroy() {
//		super.destroy();
//	}

}
