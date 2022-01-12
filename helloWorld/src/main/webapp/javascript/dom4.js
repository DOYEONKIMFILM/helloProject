const titles = ['이름', '학생번호', '점수', '삭제'];
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

let parent = document.getElementById("show");

// table 태그 생성
let tbl = document.createElement('table');
tbl.setAttribute('border', '1');
parent.appendChild(tbl);


// thead 태그 생성
let thd = document.createElement('thead');

titles.forEach(function (title) {
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    let text = document.createTextNode(title);
    th.appendChild(text);
    tr.appendChild(th);
    thd.appendChild(th);
});
tbl.appendChild(thd);

// tbody 태그 생성
let tbd = document.createElement('tbody');

students.forEach(function (obj) {
    let tr = document.createElement('tr');

    // 마우스올라가면 색상변경
    tr.onmouseover = function(e) {
        e.target.style.backgroundColor = 'yellow';
    }

    // 색돌리기
    tr.onmouseout = function (e) {
        e.target.style.backgroundColor = null;
    }

    // field 갯수만큼 반복해서 생성
    for (let field in obj) {
        let td = document.createElement('td');
        let text = document.createTextNode(obj[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    // 삭제버튼
    let td = document.createElement('td');
    let btn = document.createElement('button');

    btn.onclick = function (e) {
        console.log(e.target);
        e.target.parentNode.parentNode.remove();
    }
    let text = document.createTextNode('삭제');
    btn.appendChild(text);
    td.appendChild(btn);
    tr.appendChild(td);

    tbd.appendChild(tr);
});
tbl.appendChild(tbd);