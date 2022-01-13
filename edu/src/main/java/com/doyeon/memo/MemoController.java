package com.doyeon.memo;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class MemoController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		// 한글깨짐 방지 -> 인코더
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/json;charset=UTF-8");
		
		// 요청정보에서 req 값을 읽음
		String cmd = req.getParameter("cmd");
		
		// 전체조회, 등록 공통으로 쓰기 위한 인스턴스생성
		MemoDAOImpl dao = new MemoDAOImpl();
		
		// list -> JSON 타입의 형태변환
		// 웹 화면에 출력
		Gson gson = new GsonBuilder().create();
		PrintWriter out = resp.getWriter();
		
		if (cmd.equals("selectAll")) {
			List<Memo> list = dao.selectAll();
			out.print(gson.toJson(list));
		}

	}

}
