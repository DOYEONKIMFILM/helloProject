// event1.js

let str = ` <table border="1">
<thead>
    <tr>
        <th>이름</th>
        <th>전화번호</th>
        <th>주소</th>
        <th>삭제</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>홍길동</td>
        <td>053-1234-5678</td>
        <td>대구 중구 100번지</td>
        <td><button>삭제</button></td>
    </tr>
    <tr>
        <td>박기현</td>
        <td>053-5643-1232</td>
        <td>대구 중구 200번지</td>
        <td><button>삭제</button></td>
    </tr>
    <tr>
        <td>홍민규</td>
        <td>053-2125-5432</td>
        <td>대구 중구 300번지</td>
        <td><button>삭제</button></td>
    </tr>
</tbody>
</table>`;
document.write(str);

// 첫번째 td만
let names = document.querySelectorAll('table>tbody>tr>td:nth-child(1)');
console.log(names);

for (let i = 0; i < names.length; i++) {
    names[i].onclick = function (e) {
        console.log(e.target.innerText);
        let text = e.target.innerText;
        alert(text + '입니다!');
    }
}

let rows = document.querySelectorAll('tbody>tr');
for (let i = 0; i < rows.length; i++) {
    rows[i].onmouseover = function (e) { //마우스를 올리는 이벤트
        console.log(e.target.parentNode); //parentNode td의 부모(상위)요소
        e.target.parentNode.style.backgroundColor = 'yellow';
       // e.target.parentNode.style.display = 'none'; //none -> 화면에서 숨김
    }

    //마우스 빠져나오는 이벤트
    rows[i].onmouseout = function (e) {
        e.target.parentNode.style.backgroundColor = null; //마우스 빠져나오면 원래색
    }
}

let btns = document.querySelectorAll('tbody>tr>td>tr>button');
for (let i = 0; i < btns.length; i++) {
    //btns[i].onclick = deleteFnc;
    btns[i].addEventListener('click', deleteFnc);
}

function deleteFnc(e) {
    e.target.parentNode.parentNode.remove();
}