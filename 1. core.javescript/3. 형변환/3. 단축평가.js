
true&&true;
true&&false;
false&&true;
false&&false;

true||true;
true||false;
false||true;
false||false;

//OR연산 : 첫 번째 truthy를 반환
console.log('hello'||'bye');
console.log(null||'안뇽');

//AND연산 : 첫 번째 falsy를 반환
console.log('메롱'&&'즐~~');
console.log(0 &&'룰루랄라');



if(조건){
  console.log('blah blah~~');
}

조건&&console.log('blah blah~~');

/*

<h1>안녕하세요</h1>
login && <h2>xxx님 환영합니다</h2>


쿠폰당첨여부 && sendCoupon();
내게시물여부 && <button>삭제</button>

!쿠폰당첨여부 && sendMessage();


*/