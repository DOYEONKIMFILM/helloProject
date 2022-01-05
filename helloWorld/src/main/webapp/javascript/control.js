// control.js
var num = prompt('점수를 입력하세요: ');
var grade = '';
if (num >= 90) { // 90~94: A, 95~ : A+
    if (num >= 95) {
        grade = 'A+'
    } else {
        grade = 'A';
    }

} else if (num >= 80) { // 80~84: B, 85~89 : B+
    if (num >= 85) {
        grade = 'B+'
    } else {
        grade = 'B';
    }

} else if (num >= 70) {
    if (num >= 75) {
        grade = 'C+'
    } else {
        grade = 'C';
    }

} else if (num >= 60) {
    if (num >= 65) {
        grade = 'D+'
    } else {
        grade = 'D';
    }
    
} else {
    grade = 'F';
}

// num = parseInt(num / 10); //95점/10 => 9.5
// switch (num) {
//     case 9:
//         grade = 'A';
//         break;
//     case 8:
//         grade = 'B';
//         break;
//     case 7:
//         grade = 'C';
//         break;
//     case 6:
//         grade = 'D';
//         break;
//     default:
//         grade = 'F';
//         break;
// }

document.write(`<h3>점수 : ${num} <h3>등급: ${grade}`);