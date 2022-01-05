// function6.js

// 똑같은 변수 sum 이 선언됨 그래서 에러
//let sum = function sum (a, b){
//   return a + b;
//}

let sum = function (first, last) {
    return first + last;
}

// sum을 anotherSum에 대입
let anotherSum = sum;

console.log(sum(10, 20));
console.log(anotherSum(30, 40));

// Arrow Function(화살표 함수)
// function(first,last) 을 적어주거나 or (first,last) => 를 하거나 같음 
let getMinVal = (first, last) => first > last ? last : first; //{
    // if (first > last) {
    //     result = last;
    // } else {
    //     result = first;
    // }
    // 위와 같음
    // return first > last ? last : first;
//}

console.log(getMinVal(10, 5));