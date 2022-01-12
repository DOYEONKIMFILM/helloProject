// map.js
function makePage(aryData) {
    // [{id:??, first_name:??, last_name:??, email:??}]
    // -> table 형식.
    // table > thead, tbody > tr > th,td
    let ul = document.createElement('ul');
    aryData.forEach(function (item) {
        let li = document.createElement('li');
        let text = document.createTextNode(`${item.id} - ${item.first_name} - ${item.last_name}`);
        li.appendChild(text);
        ul.appendChild(li);
    })
    console.log(ul);
    document.getElementsByTagName('body')[0].appendChild(ul);
}

// 보여줄 항목 정의.
const fields = ['id', 'centerName', 'address', 'phoneNumber', 'sido', 'sigungu', 'map'];

function showCenterList(data) {
    // 전체카운트: data.currentCount : 284
    // 현재페이지: data.page : 1
    // 전체데이터: data.data : 284건의 접종센터 정보.

    // table 요소가 있으면 삭제.
    if (document.getElementById('tbl')) {
        document.getElementById('tbl').remove();
    }

    let table = document.createElement('table');
    table.setAttribute('border', '1');
    table.setAttribute('id', 'tbl');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    // table의 하위요소로 thead, tbody 추가.
    table.append(thead, tbody);
    // thead작성.
    let tr = document.createElement('tr');
    fields.forEach(function (field) {
        let td = document.createElement('th');
        let text = document.createTextNode(field.toUpperCase());
        td.append(text);
        tr.append(td);
    });
    thead.append(tr);
    // tbody 작성.
    data.forEach(function (item) {
        let tr = document.createElement('tr');
        fields.forEach(function (field) {
            // map => link생성.
            if (field == 'map') {
                let linkTag = document.createElement('a');
                linkTag.setAttribute('href', `daum.html?lat=${item.lat}&lng=${item.lng}&facility=${item.facilityName}`);
                linkTag.setAttribute('target', '_blank');
                linkTag.innerText = item.centerName;

                let td = document.createElement('td');
                td.appendChild(linkTag);
                tr.append(td);

            } else {
                let td = document.createElement('td');
                let text = document.createTextNode(item[field]);
                td.append(text);
                tr.append(td);
            }
        });
        tbody.append(tr);
    });

    document.getElementById('show').append(table);
}

// 시도별로 센터정보 보여주기.
function showCenterListBySido(data) {
    // data.totalCount, data.page, data.data
    let centers = data.data;
    // 시도 => 정보생성.
    let filteredCenter = []; // //시도 이름, 중복=>제거
    centers.forEach(function (item) {
        // filteredCenter값중에서 item.sido 같은 값이 없으면 추가.
        if (filteredCenter.indexOf(item.sido) == -1) {
            filteredCenter.push(item.sido);
        }
    });
    console.log(filteredCenter);

    // 버튼생성.
    let show = document.getElementById('show');
    filteredCenter.forEach(function (centerName) {
        let btn = document.createElement('button');
        btn.innerText = centerName;
        btn.addEventListener('click', showSidoList);
        show.appendChild(btn);
    });

    function showSidoList() {
        // 서울특별시 => 서울특별시에 소속된 센터정보 출력
        console.log(this.innerText);
        let searchCenterName = this.innerText;

        let filterAry = centers.filter(function (item) {
            return item.sido == searchCenterName;
        });
        // filterAry.length => 배열의 크기
        // paging페이지 수를 계산.
        let totalCnt = filterAry.length; // 43 / 10 => 4.3 => 올림 5page
        let totalPage = Math.ceil(totalCnt / 10);

        // a태그 생성하는 부분(추가)
        let paging = document.getElementById('page');
        // 새로운 시군구의 정보를 보여주기 전에 이전 페이지 정보를 초기화.
        let children = paging.childNodes;
        let lnth = children.length;
        for (let i = 0; i < lnth; i++) {
            paging.removeChild(children[0]);
        }
        for (let i = 1; i <= totalPage; i++) {
            let aTag = document.createElement('a');
            aTag.innerText = i; // <a href="">2</a>
            aTag.setAttribute('href', '#');
            aTag.addEventListener('click', pagingList);
            paging.appendChild(aTag);
        }
        console.log(filterAry);
        // filterAry => [{},{},{},{}]

        pagingList();
        // showCenterList(filterAry); // 43개 호출. 10개씩 구분

        function pagingList() {
            // 리스트 a에 있는 class 를 초기화.
            let allA = document.querySelectorAll('#page>a');
            for (let a of allA) {
                a.setAttribute('class', '');
            }
            // <a>, <div> => 1, window nodeType
            if (this.nodeType == 1) {
                this.setAttribute('class', 'active');
            }
            let page = this.innerText; // <a>2</a>
            if (page == null || page == '') {
                page = '1';
            }
            page = parseInt(page); // 2
            pagingAry = filterAry.filter(function (item, ind) {
                let startCnt = (page - 1) * 10; // 10
                let endCnt = (page * 10); // 20
                return startCnt <= ind && ind < endCnt; // 10 ~ 19
            });
            showCenterList(pagingAry);
        }
    }


    // 서울특별시 클릭.
    let firstBtn = document.querySelector('#show>button:nth-child(1)');
    firstBtn.click(); // 클릭이벤트 호출.

    // 사용자입력값을 읽고 =>
    // 버튼 => 이벤트 등록.

} // end of showCenterListBySido()

// Asynchoronous Javascript And Xml (ajax)
let url =
    `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&returnType=JSON&serviceKey=7Sc8y2o8nwjnhgHwF0dsrcVVWU926dK93ykFkBrMD1j8KTlf5VsGfzYsLsto0%2FswWjgumRugmOCM0qzWiHoo7Q%3D%3D`;
let xhtp = new XMLHttpRequest();
xhtp.onreadystatechange = function () {
    if (xhtp.readyState == 4 && xhtp.status == 200) {
        console.log('readyState: ' + xhtp.readyState);
        console.log('status: ' + xhtp.status);
        let data = JSON.parse(xhtp.responseText)
        console.log(data); // {currentCount:284, data: [{}{}{}], totalCount:284}

        // makePage(data);
        // showCenterList(data.data); // 전체 센터 보여주기.
        showCenterListBySido(data); // 시도별로 페이지 보여지기.

    }
}
xhtp.open('get', url);  //get or post
xhtp.send();