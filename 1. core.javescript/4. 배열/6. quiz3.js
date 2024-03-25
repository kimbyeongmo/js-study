/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

// var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

// while(true){
//   var name = prompt(`현재 멤버 : [${tvxq}] \n 삭제할 이름을 입력하세요.`);
//   if (tvxq.includes(name) === true) {
//     target = tvxq.indexOf(name);
//     del = tvxq.splice(target, 1);
//     alert(`삭제 완료! \n 남은 멤버 : [${tvxq}]`);
//   }else if(tvxq.includes(name) !== true){
//     alert(`${name}은(는) 잘못된 이름입니다. \n 다시 입력하세요!`)
//     continue;
//   }

//   if (tvxq.length<1){
//     alert('모든 멤버가 삭제되었습니다.')
//     break;
//   }
// }

/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
  해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
   다시 수정할 이름을 입력할 수 있도록 하세요.
4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
*/

// var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

//   var name = prompt(`현재 멤버 : [${tvxq}] \n 수정할 이름을 입력하세요.`);
//   if (tvxq.includes(name) === true) {
//     target = tvxq.indexOf(name);
//     var newName = prompt(`현재 멤버 : [${tvxq}] \n 새로운 이름을 입력하세요.`);
//     del = tvxq.splice(target, 1,newName);
//     alert(`수정 완료! \n 현재 멤버 : [${tvxq}]`);
//   }else if(tvxq.includes(name) !== true){
//     alert(`${name}은(는) 잘못된 이름입니다. \n 다시 입력하세요!`)
//   }

/*

문제 3번

*/


var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];
const case1 = 1;
const case2 = 2;
const case3 = 3;

while(true){
  var choice = +prompt(
    `현재 멤버 : ${tvxq} \n 메뉴를 선택하세요. \n 1. 새로운 이름 추가 \n 2. 기존 이름 삭제 \n 3. 프로그램 종료`
  );
  if (choice ===case1) {
    var newName = prompt(`추가할 새로운 멤버의 이름을 입력하세요.`);
    tvxq.push(newName);
    alert(`${newName}이(가) 추가되었습니다.`);
  } else if (choice ===case2) {
    var delName = prompt(`삭제할 멤버의 이름을 입력하세요.`);
    tvxq.includes(delName) === true
    target = tvxq.indexOf(delName);
    del = tvxq.splice(target, 1);
    alert(`${del}이(가) 삭제되었습니다.`);
  } else if (choice ===case3) {
    alert(`프로그램을 종료합니다.`);
    break;
  }
}