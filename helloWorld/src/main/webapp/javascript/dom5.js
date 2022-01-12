const data = [{
    name: '류지희',
    phone: '010-1212-3434',
    addr: '대구 중구 100번지',
    email: 'rjh@email.com'
}, {
    name: '차주연',
    phone: '010-2222-4545',
    addr: '대구 중구 200번지',
    email: 'cjy@email.com'
}, {
    name: '전호민',
    phone: '010-3333-6767',
    addr: '대구 중구 300번지',
    email: 'jhm@email.com'
}];


// <thead></thead>
function makeHead() {
    const fields = ['이름', '연락처', '주소', '이메일'];

    let thd = document.createElement('thead');
    let tr = document.createElement('tr')

    // 체크박스
    let th = document.createElement('th')
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', allCheckFnc);
    th.appendChild(checkbox);
    tr.appendChild(th);

    // 배열 갯수만큼 만들어주는 필드영역
    fields.forEach(function (field) {
        let th = document.createElement('th')
        let text = document.createTextNode(field);
        th.appendChild(text);
        tr.appendChild(th);
    });
    thd.appendChild(tr);
    return thd;
}

function allCheckFnc() {
    // this => 이벤트를 받는 대상(input)
    // tobdy쪽 checkbox 찾아서 for loop 모든 checkbox의 checked = true;
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < chks.length; i++) {
        chks[i].checked = this.checked;
    }
}


// <tbody></tbody>
// function makeBody() {
//     let tbd = document.createElement('tbody');
//     data.forEach(function (obj) {
//         let tr = document.createElement('tr');
//         for (let field in obj) {
//             let td = document.createElement('td');
//             let text = document.createTextNode(obj[field]);
//             td.appendChild(text);
//             tr.appendChild(td);
//         }
//         tbd.appendChild(tr);
//     });
//     return tbd;
// }

// 2번 body 생성하는데 tr쪼개서 하는방법
function makeBody() {
    let tbd = document.createElement('tbody');
    data.forEach(function (obj) {
        tbd.appendChild(makeTr(obj));
    });
    return tbd;
}

// tr 생성
function makeTr(item) {
    let tr = document.createElement('tr');

    // 체크박스
    let td = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    td.appendChild(checkbox);
    tr.appendChild(td);

    // 데이터 영역
    for (let field in item) {
        let td = document.createElement('td');
        let text = document.createTextNode(item[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    return tr;
}


function drawTable() {
    let tbl = document.createElement('table');

    tbl.setAttribute('border', '1');
    tbl.appendChild(makeHead());
    tbl.appendChild(makeBody());

    document.getElementById('list').appendChild(tbl);
}
drawTable();

// 즉시 실행 함수 구조
// (function () {

// }());

// (function() {
//     let tbl = document.createElement('table');
//     tbl.setAttribute('border', '1');
//     tbl.appendChild(makeHead());
//     tbl.appendChild(makeBody());

//     document.getElementById('list').appendChild(tbl);

// }());


// 등록버튼 이벤트
let addBtn = document.querySelector('#btn>button');
addBtn.addEventListener('click', addCallback);

function addCallback() {
    let name = document.querySelector('input[name = "name"]').value;
    let phone = document.querySelector('input[name="phone"]').value;
    let addr = document.querySelector('input[name="addr"]').value;
    let email = document.querySelector('input[name="email"]').value;

    if (name == "" || phone == "" || addr == "" || email == "") {
        window.alert('필수값을 입력하세요');
        return;
    }

    let obj = {
        //필드이름: 값이름
        name: name,
        phone: phone,
        addr: addr,
        email: email
    }

    let tr = makeTr(obj);
    document.querySelector('#list>table>tbody').appendChild(tr);

}

//삭제버튼 이벤트 등록.
let delBtn = document.querySelector('#btn>button:nth-child(2)');
delBtn.addEventListener('click', delCallback);

function delCallback() {
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < chks.length; i++) {
        if (chks[i].checked == true) {
            chks[i].parentNode.parentNode.remove();
        }
    }
}

// 리스트 => 입력화면에 보여주기
let names = document.querySelectorAll('table tbody tr td:nth-child(2)');
console.log(names);
for (let i = 0; i < names.length; i++) {
    names[i].addEventListener('click', showInfo);
}

function showInfo() {
    // this 이벤트를 받는 대상(td)
    let parent = names[0].parentNode;
    console.log(parent.childNodes[2].innerText);

    document.querySelector('input[name="phone"]').value //
    = parent.childNodes[2].innerText;
}