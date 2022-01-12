// example1.js

const students = [{
    fullName: '류지희',
    studNo: '1001',
    score: 80
}, {
    fullName: '차주연',
    studNo: '1002',
    score: 85

}, {
    fullName: '전호민',
    studNo: '1003',
    score: 83

}];





// 배열마지막에 추가하겠다 push
students.push({
    fullName: '홍정우',
    studNo: '1004',
    score: 88
});

//배열 처음에 추가하겠다 unshift
students.unshift({
    fullName: '고권영',
    studNo: '1005',
    score: 90
});





// 배열 반복 함수
document.write('<ul>');
students.forEach(liFnc); // -> callback function

//students.forEach(function(item, idx) {
//document.write(`<li> ${item.studNo} - ${item.fullName} - ${item.score}</li>`);
//});
document.write('</ul>');

function liFnc(item) {
    document.write(`<li> ${item.studNo} - ${item.fullName} - ${item.score}</li>`);
}

const numAry = [1, 2, 3];
numAry.push(4);
numAry.push(10);
numAry.unshift(40);

console.log(numAry);