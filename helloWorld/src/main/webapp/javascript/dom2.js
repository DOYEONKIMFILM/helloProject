// dom2.js
// document object model

// element(element node, attribute node, text node), tag => 요소
// <img src='sample.jpg'> <input type='text' value='sample'>
let imgs = document.createElement('img');

// setAttribute 속성을 주겠다!
imgs.setAttribute('src', '../images/pr1.jpg');
imgs.setAttribute('id', 'mypicture');
imgs.setAttribute('width', '200px');

// appendChild(imgs); -> imgs를 자식요소로하여 show 아이디를 가진 태그에 붙여넣겠다!
document.getElementById('show').appendChild(imgs);
console.log(imgs);



// <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>
// ul, li*3, li>text(node)
let fruits = ['Apple', 'Banana', 'Cherry'];
let ul = document.createElement('ul');

// for of 반복문 
// for (let fruit of fruits) {
//     let li = document.createElement('li');
//     let text = document.createTextNode(fruit);
//     li.appendChild(text);
//     ul.appendChild(li);
// }

// for each 반복문 = foreach에 콜백기능을 담아 호출
fruits.forEach(callBackFnc);

function callBackFnc(item) {
    let li = document.createElement('li');
    let text = document.createTextNode(item);
    li.appendChild(text);
    ul.appendChild(li);
}

console.log(ul);

document.getElementById('bdy').appendChild(ul);



// 조회 삭제
let delBtn = document.getElementById("delBtn");
delBtn.onclick = function () {
    let sname = document.getElementById('sname').value;
    let list = document.querySelectorAll('#nameList>li');
    for (let i = 0; i < list.length; i++) {
        if (list[i].innerText == sname) {
            list[i].remove();
            break;
        }
    }
}


// 추가
// 1) 이벤트 등록 버튼
// 2) 이벤트 기능: 사용자의 입력값 -> <li>입력값</li>
// 3) ul태그 찾고 ul 하위에 붙여넣기

let addBtn = document.getElementById("addBtn");
addBtn.onclick = function () {
    let sname = document.getElementById('sname').value;
    let list = document.createElement('li');
    let text = document.createTextNode(sname);
    li.appendChild(text);

    document.getElementById('nameList').appendChild(li);

    //let sname = document.getElementById('sname').value = "";
    //let sname = document.getElementById('sname').focus();
}