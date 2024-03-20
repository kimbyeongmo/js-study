//브라우저 전용함수 : node.js환경에서는 작동 불가
//prompt() : 브라우저에서 입력을 할 수 있게 해주는 함수
//confirm() : 브라우저에서 확인/취소를 할 수 있게 해주는 함수
//alert() : 브라우저에서 알림창을 띄우는 함수

// var yourName=prompt(`당신의 이름을 입력하세요!`);
// alert(`입력한 이름 : ${yourName}`);
// var resultFlag=confirm(`혹시 얼마 있니?? 가진거 다 내놓으렴`);
// console.log(`나의 대답 : ${resultFlag}`);

var yourName = prompt('당신의 이름은?');
var yourAge = +prompt('당신의 나이는?');

var birthYear = 2024 - yourAge + 1;

alert(`${yourName}님은 ${birthYear}년생이시군요??`);