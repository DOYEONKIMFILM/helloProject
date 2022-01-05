// function2.js


// 매개값의 합
function addNumber(first, last) {
    var sum = first + last;
    return sum;
}
var result1 = addNumber(10, 20);
var result2 = addNumber(15, 25);
var result3 = addNumber(addNumber(10, 20), addNumber(15, 25));
console.log(`첫번째: ${result1}, 두번째: ${result2}`);
console.log(`총 합: ${result3}`);



// 첫번째 매개값과 두번째 매개값 사이의 값의 합
function sumBetweenNum(first, last) {
    var sum = 0;
    for (var i = first; i < last; i++) {
        sum += i;
    }
    return sum;
}

var result4 = sumBetweenNum(1, 10);
var result5 = sumBetweenNum(1, 11);
console.log(`${result4}`);
console.log(`${result5}`);


// num값의 배수 더하기
function holNum(first, last, num) {
    var sum = 0;
    for (var i = first; i < last; i++) {
        if (i % num == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(holNum(10, 20, 2));
console.log(holNum(10, 21, 3));