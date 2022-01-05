// string1.js
var val = 'hello';
val = new String('hello,world');
console.log(val.substring(2, 3));


var h3Tag = document.querySelector('h3');
var text = h3Tag.innerHTML;
var str = text.substring(2, 10); //substring => 인덱스 2번째부터 인덱스 10번째까지
str = text.slice(1, 5);


//아이디값이 show인 애 호출
var elem = document.getElementById('show');

//컨텐츠 사이에 입력된다
//elem.innerHTML = '<h3>Hello</h3>';

//태크도 텍스트로 처리한다 innerText
//elem.innerText = '<h3>Hello</h3>';

elem.innerText = str; //인덱스 2번째부터 인덱스 6번째까지

console.log(elem);