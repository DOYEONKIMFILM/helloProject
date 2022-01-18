<%@page import="com.edu.model.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>memberUpdate.jsp</title>
</head>
<body>
	<%-- <%
	MemberVO vo = (MemberVO) request.getAttribute("member");
	MemberVO login = (MemberVO) session.getAttribute("login");
	%> --%>
	<!-- Attribute에 있는 값을 읽어오기 -->
	
	${member } ${login }

	<h3>회원정보검색</h3>
	<%-- <form action='<%=request.getContextPath() %>/memberSearch.do' method='post'> --%>
	<form action='${pageContext.request.contextPath }/memberSearch.do' method='post'>
		아이디: <input type='text' name='id'><br> <input
			type='hidden' name='job' value='update'>
			<input type='submit' value='조회'>
	</form>

	<c:choose>
		<c:when test="${member != null }">
			<p>회원정보수정</p>
			<form action='${pageContext.request.contextPath }/memberUpdate.do' method='post'>
				아이디: <input type="text" readonly name="id" value="${member.id }"><br>
				비밀번호: <input type="text" name="passwd" value="${member.passwd }"><br>
				이름: <input type="text" name="name" value="${member.name }"><br>
				이메일: <input type="text" name="mail" value="${member.mail }"><br>
				<c:choose>
					<c:when test="${login.id == member.id }">
						<input type="submit" value="수정">
					</c:when>
					<c:otherwise>
						<a href='${pageContext.request.contextPath }/index.jsp'>홈으로</a>
					</c:otherwise>
				</c:choose>

			</form>
		</c:when>

		<c:otherwise>
			<p>조회된 결과가 없습니다</p>
		</c:otherwise>

	</c:choose>





	<%-- <p>회원정보수정</p>
		<form action='<%=request.getContextPath() %>/memberUpdate.do' method='post'>
			아이디: <input type="text" readonly name="id" value="<%=vo.getId() %>"><br>
			비밀번호: <input type="text" name="passwd" value="<%=vo.getPasswd() %>"><br>
			이름: <input type="text" name="name" value="<%=vo.getName() %>"><br>
			이메일: <input type="text" name="mail" value="<%=vo.getMail() %>"><br>
			<input type="submit" value="수정">
		</form>
	<%
	 	if(login.getId().equals(vo.getId())) {
	%>
			<input type="submit" value="수정">
	<%
		} else {
	%>
		<a href='<%=request.getContextPath() %>/index.jsp'>홈으로</a>
	<%
		}
	%>
		 </form> --%>
	<%-- 	<%
		} else {
	%>
		<p>조회된 결과가 없습니다</p>
	<%
		}
	%> --%>
</body>
</html>