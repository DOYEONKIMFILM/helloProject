// array1.js

let delBtn = document.getElementById('delBtn');
delBtn.onclick = function () {
    let sname = document.getElementById('sname').value;
    if (!sname) {
        alert('값을 입력하세요');
        return;
    }

    let list = document.querySelectorAll('ul>li');
    console.log(list);
    for (let i = 0; i < list.length; i++) {
        if (list[i].innerText == sname) {
            list[i].style.display = 'none';
        }
    }
}






























/*
const numAry = [23, 17, 33, 72, 88];

let sum = 0;
//배열요소, 인덱스, 배열자체
numAry.forEach(function (item, idx, ary) {
    //홀수값의 수만 더하고싶다
    if (idx % 2 == 0)
        sum += item;
});
console.log(`합게: ${sum}`);

const names = ['김은서', '황보경', '고권영', '류기태', '구자현'];
console.log(names);

const sname = window.prompt('삭제할 이름 입력>> ');
for (let i = 0; i < names.length; i++) {
    //names.push(name); 추가
    if (names[i] == sname) {
        names.splice(i, 1);
    }
}
console.log(names);
// (n, m) -> n : 인덱스값, m: 삭제될애, -> 삭제되고 '누군가' 대체될 값


*/











/*
let list = document.querySelectorAll('ul:nth-of-type(1)>li');
console.log(list);
list.forEach(function(item, idx, ary) {
    //console.log(item, idx, ary);
    console.log(item, item.innerHTML);
    if(idx % 2 == 0)
    item.innerHTML = '<h3>hello</h3>';
});


for(num of numAry) {
    console.log(numAry);
}

for(field in numAry) {
    console.log(numAry[field]);
    document.write(`${numAry[field]}<br>`);
}
*/