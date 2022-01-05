// basic2.js
'use strict'

var fruits = ['Apple', 'Banana', 'Cherry'];
var str = '';
// document.write('<ul>');
str += '<ul>';
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    // str += '<li>' + fruits[i] + '</li>';
    str += `<li> ${fruits[i]} </li>`;
    // document.write('<li>' + fruits[i] + '</li>');
}
str += '</ul>';
// document.write('</ul>');
document.write(str);

// 10 + '20' => 1020
var numbers = [10, 20, 30, 40];
console.log(`배열길이: ${numbers.length}`);
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    // Integer.parseInt('30')
    sum += parseInt(numbers[i]);
}
console.log(`합계: ${sum}`);

// 오브젝트. 같은 의미있는것들 끼리 묶는다 자바에서 클래스와 같음
var student1 = {
    name: 'Hong',
    age: 20,
    score: 80
};
// for .. in => object의 필드속성을 반복 ★ ★ ★
for (var field in student1) { //student1이 가지고있는 속성들을 하나씩 가져옴
    console.log(field, student1[field]);
    //속성이름, 값
}

var student2 = {
    name: 'Hwang',
    age: 22,
    score: 83
}
var student3 = {
    name: 'Park',
    age: 25,
    score: 85
}

var students = [student1, student2, student3];

var str = '';
str += '<table border = "1">';
str += '<thead><tr>';
for (var field in student1) {
    str += `<th>${field}</th>`;
}
str += '</tr></thead>';
str += '<tbody>';
for (var i = 0; i < students.length; i++) {
    var field = 'score';
    console.log(`${i+1}번째 name => ${students[i].name}`);
    console.log(`${i+1}번째 age => ${students[i]['age']}`);
    console.log(`${i+1}번째 score => ${students[i][field]}`);
    str += '<tr>';
    for (var field in student1) {
                    //데이터,  필드-네임에이지스코어
        str += `<td>${students[i][field]}</td>`;
    }
    str += '</tr>';
}
str += '</tbody></table>';
document.write(str);