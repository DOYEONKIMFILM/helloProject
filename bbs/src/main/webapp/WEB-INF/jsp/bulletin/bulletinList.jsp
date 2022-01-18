<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script>
	function formSubmit(id) {
		document.forms.id.value = id;
		focument.forms.frm.submit();
	}
</script>
<form id="frm" name="frm" action="${pageContext.request.contextPath }/bulletinSelect.do" method="post">
	<input type="hidden" name="id">
</form>
<table border="1">
	<thead>
		<tr>
			<th>글번호</th>
			<th>글제목</th>
			<th>작성자</th>
			<th>작성일시</th>
			<th>조회수</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="bulletin" items="${bulletinList }">
			<tr onclick="formSubmit(${bulletin.bbsId })">
				<td>${bulletinList.bbsId }</td>
				<td>${bulletinList.bbsTitle }</td>
				<td>${bulletinList.bbsWriter }</td>
				<td>${bulletinList.bbsCreateDate }</td>
				<td>${bulletinList.bbsHit }</td>
			</tr>
		</c:forEach>
	</tbody>

</table>
	<a href="${pageContext.request.contextPath }/bulletinForm.do">글등록</a>