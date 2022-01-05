// function4.js

var students = [{
    studentName: '김도연',
    birth: '1996-04-29',
    score: 80,
    phone: '010-1212-1234',
    gender: '여자'
}, {
    studentName: '천예진',
    birth: '1999-11-05',
    score: 100,
    phone: '010-5959-1234',
    gender: '여자'
}, {
    studentName: '김민수',
    birth: '1995-05-01',
    score: 50,
    phone: '010-8282-1234',
    gender: '남자'

}];

function makeTable(ary) {
    var str = '';
    str += `<table border="1">`;
    str += `<thead><tr><th>이름</th><th>생년월일</th><th>점수</th><th>연락처</th><th>성별</th></tr></thead>`;
    str += `<tbody>`;
    for (var student of ary) {
        str += '<tr>';
        // td생성
        //for in 필드갯수만큼 으로 반복
        for (var field in student) {
            str += `<td>${student[field]}</td>`;
        }
        //각각 적음
        // str += `<td>${student.studentName}</td>`;
        // str += `<td>${student.score}</td>`;
        // str += `<td>${student.birth}</td>`;
        // str += `<td>${student.phone}</td>`;
        str += '</tr>';

    }
    str += `</tbody>`;
    str += `</table>`;
    return str;

}

// document.write(makeTable(students));
makeCal(2022, 5);
makeCal(2022, 6);