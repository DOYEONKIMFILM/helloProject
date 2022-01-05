// operator.js

// 창이뜨면서, 입력하는 창도 뜬다 iVal = 입력값
// var iVal = window.prompt("값을 입력하시오");
var iVal = 0;
console.log(iVal);
var numAry = [3, 9, 20, 14, 8, 22];
var sum = 0;

// for..of .. numAry에 들어있는 갯수만큼 반복
for (var num of numAry) {
    console.log(num);
    if (num % 2 == 0) {
        sum += num;
    }
    //  if(num == iVal) {
    //      // 값 입력을 8로했으면 20, 14, 8 까지만 더하고 빠져나온다는 뜻
    //      break;
    //  }
    if (num === parseInt(iVal)) {
        break;
    }
}
console.log(`합계: ${sum}`);

console.log(3 + '5' + (3 + 4));

var sum_2 = 0;
var sum_3 = 0;
var sum_23 = 0;
for (var i = 1; i < 20; i++) {
    if (i % 2 == 0) {
        sum_2 += i;
    } if (i % 3 == 0) {
        sum_3 += i;
    } if ((i % 2 == 0) && (i % 3 == 0)) {
        sum_23 += i;
    }

}

console.log(`2의 배수 합계:  ${sum_2}`);
console.log(`3의 배수 합계:  ${sum_3}`);
console.log(`2와 3의 배수 합계:  ${sum_23}`);