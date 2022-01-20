<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

	<h3>글등록</h3>
    <form action="${pageContext.request.contextPath }/bulletinAdd.do" method="post">
    <table border="1">
    	<tbody>
    		<tr>
    			<th>제목</th>
    			<td><input type="text" name="title"></td>
    		</tr>
    		<tr>
    			<th>작성자</th>
    			<td><input type="text" name="writer" value="${sessionId }" readonly></td>
    		</tr>
    		<tr>
    			<th>내용</th>
    			<td><textarea name="content" cols="20" rows="4"></textarea></td>
    		</tr>
    		<tr>
    			<th>이미지</th>
    			<td><input type="text" name="image"></td>
    		</tr>
    		<tr>
    			<td colspan="2">
    				<input type="submit">
    				<input type="reset">
    			</td>
    		</tr>
    	</tbody>
    </table>
    </form>