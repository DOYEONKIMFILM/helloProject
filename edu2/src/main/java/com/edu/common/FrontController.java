package com.edu.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.control.CommentAddController;
import com.edu.control.CommentGetController;
import com.edu.control.CommentListController;
import com.edu.control.CommentUpdateController;
import com.edu.control.LoginController;
import com.edu.control.MemberDeleteController;
import com.edu.control.MemberListController;
import com.edu.control.MemberSearchController;
import com.edu.control.MemberUpdateController;
import com.edu.control.memberInsertController;

public class FrontController extends HttpServlet {
	// 필드
	Map<String, Controller> map = null;
	
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		map = new HashMap<String, Controller>();
		
		// init 아이들 각각의 클래스가 곧 밑에있는 service 애들로 실행이 된다.
		// url 패턴 x 컨트롤러
		map.put("/memberList.do", new MemberListController());
		map.put("/memberInsert.do", new memberInsertController());
		map.put("/memberSearch.do", new MemberSearchController());
		map.put("/memberDelete.do", new MemberDeleteController());
		map.put("/memberUpdate.do", new MemberUpdateController());
		
		// 댓글 관련
		map.put("/commentAdd.do", new CommentAddController());
		map.put("/commentList.do", new CommentListController());
		map.put("/commentGet.do", new CommentGetController());
		map.put("/commentUpdate.do", new CommentUpdateController());
		
		// 로그인 관련
		map.put("/login.do", new LoginController());
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 한글 처리
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		
		String uri = req.getRequestURI(); // uri: /edu2/memberList.do
		String context = req.getContextPath(); //context: /edu2
		String path = uri.substring(context.length()); // context의 길이만큼 잘라서 memberLiist.do만 읽어온다
		
		Controller control = map.get(path);
		control.execute(req, resp);
		
	}
	
	
	

}
