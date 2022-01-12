// example2.js

let datas = `[{"id":1,"first_name":"Shena","last_name":"Martindale","email":"smartindale0@mayoclinic.com","gender":"Male"},
{"id":2,"first_name":"Roselle","last_name":"Baline","email":"rbaline1@npr.org","gender":"Female"},
{"id":3,"first_name":"Melinda","last_name":"Grannell","email":"mgrannell2@usgs.gov","gender":"Male"},
{"id":4,"first_name":"Bonnibelle","last_name":"Caser","email":"bcaser3@icio.us","gender":"Female"},
{"id":5,"first_name":"Charita","last_name":"Cardinale","email":"ccardinale4@about.me","gender":"Male"},
{"id":6,"first_name":"Dani","last_name":"Brandt","email":"dbrandt5@time.com","gender":"Female"},
{"id":7,"first_name":"Kesley","last_name":"Keam","email":"kkeam6@redcross.org","gender":"Male"},
{"id":8,"first_name":"Godfrey","last_name":"O'Criane","email":"gocriane7@yolasite.com","gender":"Male"},
{"id":9,"first_name":"Jeniffer","last_name":"Penritt","email":"jpenritt8@technorati.com","gender":"Female"},
{"id":10,"first_name":"Myron","last_name":"Reckus","email":"mreckus9@homestead.com","gender":"Female"},
{"id":11,"first_name":"Kay","last_name":"Shingles","email":"kshinglesa@opensource.org","gender":"Male"},
{"id":12,"first_name":"Silvia","last_name":"Sherlaw","email":"ssherlawb@amazon.de","gender":"Male"},
{"id":13,"first_name":"Lindsey","last_name":"Gladstone","email":"lgladstonec@pcworld.com","gender":"Female"},
{"id":14,"first_name":"Vladamir","last_name":"Hadfield","email":"vhadfieldd@huffingtonpost.com","gender":"Female"},
{"id":15,"first_name":"Eamon","last_name":"Binnell","email":"ebinnelle@example.com","gender":"Female"}]`;

// 위 데이터 -> json.parse 자바스크립트의 오브젝트로 바꿔준다
let employees = JSON.parse(datas);
//console.log(employees);

document.write(`<table border="1">`);
document.write(`<thead><th>ID</th><th>Name</th><th>Email</th><th>Gender</th></thead>`);
employees.forEach((item, ind) => {
    document.write(`<tbody>`);
    document.write(`<tr><td>${item.id}</td><td>${item.last_name} ${item.last_name}</td><td>${item.email}</td><td>${item.gender}</td></tr>`);
});

document.write(`</tbody>`);
document.write(`</table border="1">`);

// employees => 배열값 중 first_name => firstNames[] 에 값을 담는다.
let firstNames = [];

employees.forEach((item, ind) => {
    firstNames.push(item.first_name);
});

console.log(firstNames);
