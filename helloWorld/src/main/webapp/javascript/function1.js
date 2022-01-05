// 매개변수 합계
function addNumber(n1, n2) {
    var sum = n1 + n2;
    console.log(`합계: ${sum}`);
}
addNumber(25, 10); //함수호출 (매개변수 값 지정)


// 매개변수 이름 점수
function showNumber(yourName, yourScore) {
    document.write(`<p>이름: ${yourName}, 점수: ${yourScore}</p>`);
}
//1번째 방법 => 각각지정
var yourName = '김민수';
var yourScore = 88;
showNumber(yourName, yourScore);

//2번째 배열
var students = [{
    studentName: '김도연',
    score: 90
}, {
    studentName: '천예진',
    score: 100
}, {
    studentName: '박이현',
    score: 70

}];

for (var student of students) {
    showNumber(student.studentName, student.score);
}


//3번째 배열 - 나이
function showInfo(yourName, birthYear){
    var today = new Date();
    today.getFullYear(); //연도정보
    var age = today.getFullYear() - birthYear
    document.write(`<P>${yourName}씨는 올해 만${age}세 입니다.</p>`);
}

var yourName = '김민수';
var birthYear = 1998;
showInfo(yourName, birthYear);

var students = [{
    studentName: '김도연',
    birth: 1996
}, {
    studentName: '천예진',
    birth: 1999
}, {
    studentName: '박이현',
    birth: 2002

}];

for (var student of students) {
    showInfo(student.studentName, student.birth);
}

