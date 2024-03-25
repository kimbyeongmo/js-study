// 횟수가 정해지면 for
// 횟수가 정해지지 않으면 while 

var i=1; //1.begin
while(i<=5){ //2. end
  console.log('hello');//3. execute
  i++; //4.step
}



for(var i=1; i<=5;i++){
  console.log('hello');
}

// 1~10 누적합
var total = 0;
for(var i = 1; i <= 10; i++){
  total += i;
}
console.log(total);

// 횟수 지정 반복문
for(var i = 0; i<5; i++){
  console.log('메롱');
}

