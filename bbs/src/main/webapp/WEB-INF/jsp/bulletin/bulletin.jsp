
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
${bulletin }
<!-- bulletin.jsp -->
<script>
	function deleteFunc(id) {
		document.forms.delFrm.id.value = id;
		document.forms.delFrm.submit();
	}
	function listFunc(){
		location.href="${pageContext.request.contextPath }/bulletinList.do"
	}
</script>

<form name="delFrm"
	action="${pageContext.request.contextPath }/bulletinDelete.do"
	method="post">
	<input type="hidden" name="id">
</form>

<form id="detailFrm"
	action="${pageContext.request.contextPath }/bulletinUpdate.do"
	method="post">
	<input type="hidden" name="id" value="${bulletin.bbsId }">
	<table class='table' border="1">
		<tbody>
			<tr>
				<th>글번호</th>
				<td>${bulletin.bbsId } / 작성자: ${bulletin.bbsWriter }</td>
			</tr>
			<tr>
				<th>제목</th>
				<td><input class="form-control" type="text" name="title"
					value="${bulletin.bbsTitle }"></td>
			</tr>
			<tr>
				<th>내용</th>
				<td><textarea class="form-control" name="content" cols="20"
						rows="3">${bulletin.bbsContent }</textarea></td>
			</tr>
			<tr>
				<th>작성일시</th>
				<td>${bulletin.bbsCreateDate }</td>
			</tr>
			<tr>
				<th>조회수</th>
				<td>${bulletin.bbsHit }</td>
			</tr>
			<tr>
				<td colspan="2">
				<c:choose>
					<c:when test="${bulletin.bbsWriter == sessionId }">
				<input type="submit" value="수정">
				<input type="reset" value="초기화">
				<input type="button" value="삭제" onclick="deleteFunc(${bulletin.bbsId })">
				<input type="button" value="목록" onclick="listFunc()">
					</c:when>
					<c:otherwise>
						<input type="submit" disabled value="수정">
						<input type="button" value="목록" onclick="listFunc()">
					</c:otherwise>
				</c:choose>
				</td>
			</tr>
		</tbody>
	</table>
</form>
<style>
.reply-register>div {
	display: inline-block;
}

.reply-register>div:nth-child(1) {
	float: left;
	width: 20%;
	position: relative;
}

.reply-register>div:nth-child(2) {
	float: left;
	width: 50%
}

.reply-register>div:nth-child(3) {
	float: right;
	margin-right: 20px;
	position: relative;
	top: 35px;
}
</style>
<style>
	div.row {
		border: 1px dotted red;
		margin-bottom: 3px;
	}
</style>
<!-- 댓글 (작성자, 내용, 등록일시) -->
<div class="reply">
	<h4>댓글목록</h4>
	<div class="reply-List"></div>
	<div class="reply-register"
		style="height: 90px; border: 1px solid grey">
		<div>작성자: <span id="writer">${sessionId }</span></div>
		<div><textare cols="50" rows="3" id="content"></textare></div>
		<div>
			<button id="register">등록</button>
		</div>
	</div>
</div>
<script>
	// 데이터 한건을 가지고 리스트에 추가
	function attachList(reply) {	// reply => id, writer, content
		let div = $('<div>').attr('class', 'row')
		.attr({'id', reply.replyId, 'writer':reply.replyWriter, 'content':reply.replyDate});
		
		div.append(//
			$('<span>').text(reply.replyWriter), //
			$('<span>').text(reply.replyContent), //
			$('<span>').text(reply.replyDate), //
			$('<button>').text('댓글삭제').click(deleteReply)
		);
		$('.reply-list').append(div);
	}
	function deleteReply() {
		let delId = $(this).parent().attr('id');	//삭제 할 아이디
		// 댓글을 작성한 userId == 삭제할려고 하는 userId
		let writer = $(this).parnet().children().eq(0).text(); //글 작성자 userId
		
		console.log(delId);
		$.ajax ({
			url: 'deleteReply.do', //호출주소
			data: {id: delId},
			dataType: 'json',
			success: function(result) {
				// 화면에서 div 제거
				if(result.retCode == 'Success') {
					$('#' + delId).remove(); //화면처리
				} else {
					alert('댓글' + delId + '번 삭제를 실패하였습니다.');
				}
			},
			error: function(err) {
				console.log(err);
			}
		})
	}
	//console.log($('.reply-list').children().eq(1).children().eq(1).text());
	// Ajax 호출 (댓글정보: 원본글에 대한 댓글 원본글1 댓글번호1)
	let bbsId = $('#detailFrm>input[name="id"]').val();
	$.ajax({
		url: 'replySelect.do',	// 호출컨트롤 url패턴
		data: {id: bbsId}, //'id=' + bbsId, 
		success: function(result) {
			console.log(result);
			
			// result 건수만큼 반복
			result.forEach(function(reply) {
				attachList(reply);
			});
		
		},
		error: function(err) {
			console.log(err);
		}
	});
	
	// 댓글 등록 기능
	$('#register').on('click', function(){
		let bbsId = $('#detailFrm>input[name="id"]').val(); //
		let writer = $('#writer').text(); //
		let content = $('#content').val();
		$.ajax ({
			url: 'replyRegister.do',	//호출 url
			date: {bbsId: bbsId, writer: writer, content: content},	// param
			success: function(result) {	//성공
				console.log(result);
				attachList(result);
				$('#content').val(''); // 입력값을 비우기
			},
			error: function(error) {	//에러 발생시
				console.log(error);
			}
		})
	});
	

</script>