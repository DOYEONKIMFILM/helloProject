// dom1.js

let pelemt = document.querySelector('body>p');
console.log(pelemt);
pelemt.innerHTML = 'not hello';

// 엘리먼트 p태그를 만들겠습니다.
let newP = document.createElement('p');
// p태그안에 글자추가
newP.innerHTML = 'Good, morning!';

console.log(newP);

pelemt.after(newP);

let list = document.querySelectorAll('ul>li');
list[0].remove();
console.log(list);

document.getElementById('delBtn').onclick = function () {
    let sname = document.getElementById('sname').value;
    let liTag = document.createElement('li');
    liTag.innerHTML = sname;
    let ul = document.querySelector('ul');
    ul.appendChild(liTag);
}