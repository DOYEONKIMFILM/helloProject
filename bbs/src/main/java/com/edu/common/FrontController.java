package com.edu.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.web.BulletinAddController;
import com.edu.web.BulletinDeleteController;
import com.edu.web.BulletinFormController;
import com.edu.web.BulletinListController;
import com.edu.web.BulletinSelectController;
import com.edu.web.BulletinUpdateController;
import com.edu.web.MainController;
import com.edu.web.NoticeAddController;
import com.edu.web.NoticeDeleteController;
import com.edu.web.NoticeFormController;
import com.edu.web.NoticeListController;
import com.edu.web.NoticeSelectController;
import com.edu.web.NoticeUpdateController;


public class FrontController extends HttpServlet {
	// 필드
	Map<String, Controller> map = null;
	
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		map = new HashMap<String, Controller>();
	
		// url 패턴 - 컨트롤러
		map.put("/main.do", new MainController());
		
		// 게시판 컨트롤
		map.put("/bulletinList.do", new BulletinListController());
		map.put("/bulletinForm.do", new BulletinFormController());
		map.put("/bulletinAdd.do", new BulletinAddController());
		map.put("/bulletinSelect.do", new BulletinSelectController());
		map.put("/bulletinUpdate.do", new BulletinUpdateController());
		map.put("/bulletinDelete.do", new BulletinDeleteController());
	
		// 공지사항 컨트롤
		map.put("/noticeList.do", new NoticeListController());
		map.put("/noticeForm.do", new NoticeFormController());
		map.put("/noticeAdd.do", new NoticeAddController());
		map.put("/noticeSelect.do", new NoticeSelectController());
		map.put("/noticeUpdate.do", new NoticeUpdateController());
		map.put("/noticeDelete.do", new NoticeDeleteController());
	
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 한글 처리
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		
		String uri = req.getRequestURI(); // uri: /edu2/memberList.do
		String context = req.getContextPath(); //context: /edu2
		String path = uri.substring(context.length()); // context의 길이만큼 잘라서 memberLiist.do만 읽어온다
		System.out.println(path);
		
		Controller control = map.get(path);
		control.execute(req, resp);
		
	}
	
	
	

}
