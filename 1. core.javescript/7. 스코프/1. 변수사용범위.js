
var x =99; // global scope : 전역 변수 - 전체 끝날 때 사라짐

function foo(){
  var x ='홍길동'; // local scope : 지역 변수 - 함수 메모리가 끝나면 사라짐, return을 하지 않는 이상 밖으로 가지고 나갈 수 없음
  console.log(`foo x : ${x}`);
  return x;
}

var y=foo();
console.log(`x:${x}`);
console.log(`y:${y}`);


console.log('==========================')

// 중첩 함수 : 함수 안에 함수를 정의

function outer(m){
  var n = 'outer local n'
  var v = 'outer local v'
  console.log(n);
  console.log(v);
  console.log(m);

  // 헬퍼 함수 : 바깥쪽 함수 전용함수
  function inner(){
    var m='inner local m';
    console.log(m);
  }
  inner();
}

outer('outer param m')