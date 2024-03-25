// // 입력받은 숫자 이하의 2의 제곱수를 가로로 출력
// var n = +prompt('양의 정수를 입력하세요.'); 

// // 제곱수를 누적한 변수
// var accum = '';

// for (var i = 2; i <= n; i *= 2) {
//   accum += `${i} `;
// }
// alert(accum);


// 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = +prompt('정수: ');

// 약수 카운트를 저장할 변수
var count = 0;

// 출력내용을 저장할 변수
var result = '';

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    result += `${i}\n`;
    count++;
  }
}
result += `약수의 개수: ${count}개`;

alert(result);