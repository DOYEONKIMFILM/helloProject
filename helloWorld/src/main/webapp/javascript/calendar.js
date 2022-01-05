// calendar.js

var year = 2022;
var month = 1;

function makeCal(year, month) {

    var today = new Date(year, month - 1, 1);
    var lastDay = new Date(year, month, 0);
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

    document.write(`<h3>${today.getFullYear()}년 ${today.getMonth()+1}월</h3>`);

    // 배열을 활용해서 요일정보 출력 => 향상된 for문 = for of
    for (var day of days) {
        document.write('<span>' + day + '</span>');
    }
    document.write('<br>');

    // 빈 공란 날짜 출력
    for (var n = 0; n < today.getDay(); n++) {
        document.write('<span id="sp1"> </span>');
    }

    // 날짜 출력
    for (var i = 1; i <= lastDay.getDate(); i++) {
        // 일요일 빨간색
        if ((i + today.getDay()) % 7 == 1) {
            document.write('<span class="sunday">' + i + '</span>');
        // 토요일 파란색
        } else if ((i + today.getDay()) % 7 == 0) {
            document.write('<span class="saturday">' + i + '</span>');
        // 그 외에는 일반색
        } else {
            document.write('<span>' + i + '</span>');
        }

        // 7일마다 단락 띄우기
        if ((i + today.getDay()) % 7 == 0) {
            document.write('<br>');
        }
    }

}


// console.log(today);
// console.log(today.getFullYear());
// console.log(today.getMonth());  //달정보 1월이0부터시작
// console.log(today.getDate());
// console.log(today.getDay()); //요일정보 일0 월1 화2 수3

// var otherDay = new Date(2021, 5, 0);
// console.log(otherDay);
// console.log(otherDay.getFullYear());
// console.log(otherDay.getMonth());
// console.log(otherDay.getDate());
// console.log(otherDay.getDay());