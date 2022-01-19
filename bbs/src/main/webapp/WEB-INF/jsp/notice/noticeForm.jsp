<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    <h3>공지사항 등록</h3>
    <form action="${pageContext.request.contextPath }/noticeAdd.do" method="post">
    <table border="1">
    	<tbody>
    		<tr>
    			<th>제목</th>
    			<td><input type="text" name="title"></td>
    		</tr>
    		<tr>
    			<th>내용</th>
    			<td><textarea name="content" cols="20" rows="4"></textarea></td>
    		</tr>
    		<tr>
    			<td colspan="2">
    				<input type="submit" value="등록">
    				<input type="reset" value="초기화">
    			</td>
    		</tr>
    	</tbody>
    </table>
    </form>