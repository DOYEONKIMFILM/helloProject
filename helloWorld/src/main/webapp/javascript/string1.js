// string1.js
// var val = 'hello';
// val = new String('hello,world');
// console.log(val.substring(2, 3));   // 인덱스 2부터 3이되기전까지


// var h3Tag = document.querySelector('h3');
// var text = h3Tag.innerHTML;
// var str = text.substring(2, 10); //substring => 인덱스 2번째부터 인덱스 10번이 되기 전 까지
// str = text.slice(1, 5);


// //아이디값이 show인 애 호출
// var elem = document.getElementById('show');

// //컨텐츠 사이에 입력된다
// //elem.innerHTML = '<h3>Hello</h3>';

// //태크도 텍스트로 처리한다 innerText
// //elem.innerText = '<h3>Hello</h3>';

// elem.innerText = str; //인덱스 2번째부터 인덱스 6번째 전 까지

// console.log(elem);





// string1.js => 1월6일 두번째시간
const person = {
    fullName: 'Hong',
    age: 10,
    toString: function () {
        return this.fullName + ', ' + this.age;
    }
}

person.fullName = 'Hwang'; //값을 읽어올수도 변경할수도 있다
person.toString();

const str = 'Hwang';
str.length;
let newStr = str.substring(1, 5); //1번째 인덱스 ~ 5번째까지 잘라낸다. wang, newStr 변수에담음
newStr = str.slice(2, 4); //2번째 인덱스부터 4인덱스 전인 3까지 가져온다
// 서브스트링과 달리 -값을 가질 수 있다. (뒤에서부터움직이는게 -마이너스)


newStr = str.replace('a', 'e').replace('e', '.'); // a문자를 -> e로 바꾼다, ' ' ',' 특문가능, 이중중첩가능
console.log(newStr);


// 주민번호 : 000101-3123456, 990101-2123456
//           850101-1234567, 870101 2123456, 9201012123456
// 남자 / 여자 구별하는 function

function getGender(jm) {
    // 주민번호의 길이가 13, 14가 아니면 프로그램종료. 맞다면 밑에 구문실행.
    if (jm.length != 13 && jm.length != 14) {
        return;
    }

    // 7번째 위치 남자: 1,3 / 여자: 2,4
    let genNum = jm.replace('-', '').replace(' ', '').substring(6, 7);
    // genNum = jm.slice(-7, -6);
    let gender = '남자';

    if (genNum == '1' || genNum == '3') {
        gender = '남자';
    } else if (genNum == '2' || genNum == '4') {
        gender = '여자';
    } else {
        gender = 'None';
    }
    return gender;
}

console.log(getGender('850101-1234567')); //남자
console.log(getGender('870101 2123456')); //여자
console.log(getGender('9201012123456')); //여자
console.log(getGender('9201012123234123356')); //13,14길이가 아니라서 종료


// 대문자 변경 toUpperCase()
console.log('hello'.toUpperCase());

// 소문자 변경 toLowerCase()
console.log('HELLO'.toLowerCase());

// 문장 연결 시작문장.concat(문장1, 특문, 문장2 등등 여러개가능)
let str1 = 'hello'
str2 = 'world';
console.log(str1.concat(' ', str2, '!!'));


let str3 = str1.concat(' ', str2, '!!');

// 몇번째 위치의 인덱스값을 넣으면 => 해당하는 위치의 문자를 리턴
let pos = str3.charAt(6);
console.log(pos);

// ( ) < 에 입력하는 기준으로 쪼갬  => ' '< 스페이스를 기준으로 쪼갠다
// hello world!!
let ary = str3.split(' ');
for (let str of ary) {
    console.log(str);
}

let temp = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel obcaecati alias, distinctio voluptas eius consequatur ut quis rem. Laborum, voluptatibus esse aspernatur recusandae maiores in exercitationem hic quo repudiandae quae.';
let tempAry = temp.split(' ');
console.log(tempAry.length); // 단어가 몇개인지.


// 과일을 입력받으면 그 과일이 몇번째 위치에 있는지
let fruits = 'Apple Banana Cherry Melon';

// banana, BANANA, BAnana == banana
let fruit = prompt('과일입력: ');

function getLoc(fruit) {
    // 값이 없는상태 : 0, null, '', undefined => false
    if (!fruit) {
        return;
    }
    // 공백을 기준으로 자른다
   let temp = fruits.split(' ');
   let cnt = 0;
   console.log(temp);
   for (let i = 0; i < temp.length; i++) {
        if(temp[i].toUpperCase() == fruit.toUpperCase()) {
            cnt = i + 1;
        }
   }
    if (cnt == 0) {
        return '만족하는 값이 없습니다.';
    }
    return cnt + '번째';
}
console.log(getLoc(fruit));