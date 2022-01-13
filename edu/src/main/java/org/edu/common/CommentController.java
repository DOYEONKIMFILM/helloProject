package org.edu.common;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.edu.comment.CommentDAO;
import org.edu.comment.CommentVO;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class CommentController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/json;charset=utf-8");

		// 요청정보에서 req에(파라미터에서 넘어온) 값을 읽음
		String cmd = req.getParameter("cmd");

		CommentDAO dao = new CommentDAO(); // 셀렉트, 인서트 공통으로 쓰기위해 바깥에 객체 호출

		// list -> JSON 타입의 형태로 바꿔서 넘겨주기 -> 공통
		Gson gson = new GsonBuilder().create();
		PrintWriter out = resp.getWriter();

		// 리스트 보여주기
		if (cmd.equals("selectAll")) {
			List<CommentVO> list = dao.selectAll();

			out.print(gson.toJson(list)); // list -> JSON 타입의 형태로 바꿔서 넘겨주기

		} else if (cmd.equals("insert")) {
			String name = req.getParameter("name");
			String content = req.getParameter("content");

			CommentVO vo = dao.insertComment(name, content);

			Map<String, Object> resultMap = new HashMap<String, Object>();
			// {"retCode":"Success", "retVal": vo}
			// {"retCode": "Fail", "retVal": "에러발생" }
			if (vo == null) {
				resultMap.put("retCode", "Fail");
				resultMap.put("retVal", "에러발생");
			} else {
				resultMap.put("retCode", "Success");
				resultMap.put("retVal", vo);
			}

			out.print(gson.toJson(resultMap)); // resultMap -> JSON 타입의 형태로 바꿔서 넘겨주기 -> 공통

		}

	}

}
