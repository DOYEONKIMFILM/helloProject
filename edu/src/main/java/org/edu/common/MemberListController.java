package org.edu.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MemberListController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws IOException {

		// 요청정보의 방식이 무엇인가
		String method = req.getMethod();
		String result = "";
		if (method.equals("GET")) {
			result = doGet();
		} else if (method.equals("POST")) {
			result = doPost();
		}

		// [{"id": 1, "name":"Hong"},{"id":2, "name":"Park"},{"id":3, "name":"Kim"}]
		// 요청정보의 값 읽어오기
		String id = req.getParameter("id");
		String name = req.getParameter("name");
		String score = req.getParameter("score");

		// 오타잡아내기
		resp.setContentType("text/json;charset=utf-8");
		String json = "[{\"id\":1,\"name\":\"Kim\"},{\"id\":2,\"name\":\"min\"},{\"id\":3, \"name\":\"park\"},{\"id\":" + id + ",\"name\":\"" + name + "\"},{\"id\":5,\"name\":\""+result+"\"}]";
		resp.getWriter().print(json);

		// 이동하고싶은 페이지 resp.sendRedirect(json);
	}

	public String doGet() {
		return "Get방식 호출";
	}

	public String doPost() {
		return "Post방식 호출";
	}

}
