// sample1.js

var memNum = window.prompt('입장객은 몇명입니까?');
var colNum = window.prompt('한줄에 앉을 사람은 몇명입니까?');
var cnt = 0;

// memNum / colNum => 나눈 값이 라인의 수
// 56명, 5명씩 => 11.2 => 나머지가있으면 올림
var rowNum = Math.ceil(memNum / colNum);


for (i = 1; i <= rowNum; i++) {
    for (var j = 1; j <= colNum; j++) {
        document.write(`<span> 좌석 ${i} - ${j}</span>`);
        cnt++;
        console.log(cnt, memNum);
        if (cnt == memNum) {
            break;
        }
    }
    document.write('<br>');
}
document.write();