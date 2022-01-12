// 2022-01-11 QUIZ _3강의장_김도연 UI Test .. js

// 1. 데이터 리스트 추가 -> 배열

const data = [{
    bookCode: 'P12301285',
    bookName: '이것이 자바다',
    writer: '홍성문',
    company: '신흥출판사',
    price: '25,000원'
}, {
    bookCode: 'P12301285',
    bookName: '이것이 자바다',
    writer: '홍성문',
    company: '신흥출판사',
    price: '25,000원'
}, {
    bookCode: 'P12301285',
    bookName: '이것이 자바다',
    writer: '홍성문',
    company: '신흥출판사',
    price: '25,000원'
}, {
    bookCode: 'P12301285',
    bookName: '이것이 자바다',
    writer: '홍성문',
    company: '신흥출판사',
    price: '25,000원'
}, {
    bookCode: 'P12301285',
    bookName: '이것이 자바다',
    writer: '홍성문',
    company: '신흥출판사',
    price: '25,000원'
}];



// 2. thead
function makeHead() {
    const fields = ['도서코드', '도서명', '저자', '출판사', '가격', '삭제']

    let thd = document.createElement('thead');
    let tr = document.createElement('tr');

    // 체크박스
    let th = document.createElement('th');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', allCheckFnc);
    th.appendChild(checkbox);
    tr.appendChild(th);

    fields.forEach(function (field) {
        let th = document.createElement('th');
        let text = document.createTextNode(field);
        th.appendChild(text);
        tr.appendChild(th);
    });
    thd.appendChild(tr);
    return thd;
}


function allCheckFnc() {
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < chks.length; i++) {
        chks[i].checked = this.checked;
    }
}

// 3. tbody
function makeBody() {
    let tbd = document.createElement('tbody');
    data.forEach(function (obj) {
        tbd.appendChild(makeTr(obj));
    });
    return tbd;
}

// tr
function makeTr(item) {
    let tr = document.createElement('tr');

    // 체크박스
    let td = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    td.appendChild(checkbox);
    tr.appendChild(td);

    //반복배열
    for (let field in item) {
        let td = document.createElement('td');
        let text = document.createTextNode(item[field]);
        td.appendChild(text);
        //td.appendChild(button);
        tr.appendChild(td);
    }

    // td를 한칸 만든다
    td = document.createElement('td');
    
    // <input> type이 버튼인 엘리먼트를 하나 만든다
    let button = document.createElement('input');
    button.setAttribute('type', 'button');
    // 버튼 텍스트 삭제로 지정
    button.setAttribute('value', '삭제');


    button.onclick = function (e) {
        console.log(e.target);
        e.target.parentNode.parentNode.remove();
    }

    // td에 해당 버튼을 넣은 후
    td.appendChild(button);

    //그 td를 tr에 추가
    tr.appendChild(td);

    return tr;
}

// 웹페이지에 테이블 그려주기 => 실행
(function () {
    let tbl = document.createElement('table');
    // tbl.setAttribute('border', '1');
    tbl.appendChild(makeHead());
    tbl.appendChild(makeBody());
    document.getElementById('list').appendChild(tbl);
}());


// 저장 버튼 이벤트 (등록)
let addBtn = document.querySelector('#btn>button');
addBtn.addEventListener('click', addCallback);

function addCallback() {
    let bookCode = document.querySelector('input[name = "bookCode"]').value;
    let bookName = document.querySelector('input[name = "bookName"]').value;
    let writer = document.querySelector('input[name = "writer"]').value;
    let company = document.querySelector('input[name = "company"]').value;
    let price = document.querySelector('input[name = "price"]').value;

    if (bookCode == "" || bookName == "" || writer == "" || company == "" || price == "") {
        alert('정보를 전부 입력하세요');
        return;
    }

    let obj = {
        bookCode: bookCode,
        bookName: bookName,
        writer: writer,
        company: company,
        price: price
    }
    let tr = makeTr(obj);
    document.querySelector('#list>table>tbody').appendChild(tr);
}



//삭제버튼 이벤트 (삭제)
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
    let parent = names[0].parentNode;
    console.log(parent.childNodes[2].innerText);

    document.querySelector('input[name="bookCode"]').value //
    = parent.childNodes[2].innerText;
}