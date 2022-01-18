<%@page import="com.edu.model.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>memberView/memberSearch.jsp</title>
</head>
<body>
	<%-- <%
		MemberVO vo = (MemberVO) request.getAttribute("member");
		String sid = (String) request.getAttribute("searchId");
		if(sid != null) {
			if(vo == null) {
				out.println("<p>아이디: " + sid + "의 조회된 정보가 없습니다.</p>");
			}
		}		
	%> --%>
	
	<c:if test="${searchId != null && member == null }">
	<p>아이디: ${searchId } 의 조회된 정보가 없습니다.</p>
	</c:if>
	
	<h3>회원정보검색</h3>
	<form action='${pageContext.request.contextPath }/memberSearch.do' method='post'>
		아이디: <input type='text' name='id'><br>
		<input type='hidden' name='job' value='search'>
		<input type='submit' value='조회'>
	</form>
	
</body>
</html>