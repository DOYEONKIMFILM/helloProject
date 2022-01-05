// basic.js

/*
자바스크립트의 주석구문
*/
'use strict'    //변수가 선언되지않는것들을 에러 일으켜준다!

// 타입 var -> 어떤 타입이든 다 올 수 있다!
var v1; // undefined 상태
var myname = "Hong";
v1 = "hello, world";
v1 = 'nice, world';
v1 = 'nice, "world"';
v1 = 'nice,' + myname;
v1 = `nice, ${myname}`;

v1 = 100;

v1 = 3.14;

var v2 = 10;

var result = v1 + v2;

var trueOrFalse = true;
trueOrFalse = false;
trueOrFalse = 10 < 20;
trueOrFalse = 10; // 0, null, undefined, '' -> false/ 이 외에 값이있다면 T
trueOrFalse = 'hello';

if (trueOrFalse) {
    console.log('참 값입니다.');
} else {
    console.log('거짓이거나 값이 없습니다.');
}

console.log(result);
console.log(typeof result); //typeof 데이터에 담겨진 변수의 타입을 봄 < string

var str = '<ul>';
str += '<li>Apple</li>';
str += '<li>Banana</li>';
str += '<li>Cherry</li>';
str += '</ul>';
document.write(str);

// var 변수선언:
var num1 = 10;
//num3 = 30;
console.log('global: ' + num1);

function f1() {
    var num1 = 20;
    var num3 = 40;
    console.log('local: ' + num1);
}
f1();

console.log('global: ' + num1);
console.log('global: ' + num3);