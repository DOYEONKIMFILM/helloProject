// function5.js
// 변수 선언
var result = 100;
console.log(result);

function sum(first, last) {
    var result = first + last;
    console.log(result);
}
sum(10, 20);

var result = 200;
console.log(result);

// 중복 변수 선언 시 에러를 알림 => let
//블럭 단위로는 괜찮음
// let result = 300;
let summay = 100;
console.log(summay);

function block1() {
    let sum = 200;
    console.log(summay);
}

console.log(summay);
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('--------');
// console.log(i);

// 상수 선언
const pi = 3.14;

const obj = {
    fullName: 'KildongHong',
    birth: '2012-05-04',
    score: 80,
    showInfo: function () {
        return this.fullName + ', ' + this.age;
    },
    showAge: function () {
        let today = new Date();
        let birth = new Date(this.birth);
        let age = today - birth;
        age = age / (1000 * 60 * 60 * 24 * 365);
        age = Math.floor(age); // 소수점내삐림
        return age;
    }
}
console.log(obj.fullName);
obj.age = 30; //obj가 참조하는 필드값을 변경하는건 가능하다. obj라는 애만 안될뿐
console.log(obj.age);

console.log(obj.showInfo());
console.log(obj.showAge() + '살 입니다.');