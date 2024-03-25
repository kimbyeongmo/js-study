// var x = +prompt('첫번째 숫자');
// var y = +prompt('두번째 숫자');

// // x ~ y 까지의 누적합
// var total = 0;

// var i = x;

// while (i <= y) {
//   total += i;
//   i++;
// }
// alert(`${x} ~ ${y}의 누적합: ${total}`);


var count = +prompt('정수: '); // 반복문 회전 수
var mark = ''; // 기호를 누적할 변수

var i = 1;
while (i <= count) {
  if (i % 2 === 1) {
    mark += '+';
  } else {
    mark += '-';
  }
  i++;
}
alert(mark);
