package com.edu.serv;

import java.io.IOException;
import java.util.List;
import java.util.function.Consumer;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.emp.EmpDAO;
import com.edu.emp.EmployeeVO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/EmpList.json")
public class EmpList extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public EmpList() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");

		// [{"employeeId": 10, "firstName": "kildong", "lastName": "Hong:, "email"}, {},
		// {},...]
		EmpDAO dao = new EmpDAO();
		List<EmployeeVO> list = dao.getEmpList();

		Gson gson = new GsonBuilder().create();
		String jsonData = gson.toJson(list).toString();

		/*
		 * StringBuilder sb = new StringBuilder(); sb.append("["); int totalCnt =
		 * list.size(); // 10건이면 9건까지는, 마지막 (,)
		 * 
		 * for (int i = 0; i < totalCnt; i++) { sb.append("{\"employeeId\":" +
		 * list.get(i).getEmployeeId() // + ",\"firstName\":\"" +
		 * list.get(i).getFirstName() // + "\",\"lastName\":\"" +
		 * list.get(i).getLastName() // + "\",\"email\":\"" + list.get(i).getEmail() //
		 * + "\",\"hireDate\":\"" + list.get(i).getHireDate() // + "\",\"salary\":\"" +
		 * list.get(i).getSalary() // + "\"}");
		 * 
		 * // 마지막 데이터는 , 생략. if (i != totalCnt - 1) { sb.append(","); } }
		 * sb.append("]");
		 */
		// 화면 출력
		response.getWriter().println(jsonData);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
