const traders = [
  {
    trader: {
      name: "김철수", //traders[0].trader.name
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022, //traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: "루피",
      city: "서울",
    },
    year: 2022,
    value: 780000,
  },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요
// filter -> map
const mappedYear = [];
traders
  .filter((trad) => trad.year === 2022)
  .map((trad) => mappedYear.push(trad.trader));
console.log(mappedYear);

console.log("=========================");
// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
// map(심화 : 중복 제거)
const mappedCity = [];
traders.map((trad) => mappedCity.push(trad.trader.city));

const set = [...new Set(mappedCity)];

console.log(set);

console.log("=========================");
// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
// filter -> map
const mappedNameCity = [];
traders
  .filter((trad) => trad.trader.city === "대전")
  .map((trad) => mappedNameCity.push(trad.trader));
console.log(mappedNameCity);

console.log("=========================");
// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
// map(심화 : 중복 제거)
const mappedName = [];
traders.map((trad) => mappedName.push(trad.trader.name));

const a = [...new Set(mappedName)];

console.log(a);

console.log("=========================");
// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
// filter -> map -> forEach
let total = 0;
traders
  .filter((trad) => trad.trader.city === "서울")
  .map((trad) => (total += trad.value));
console.log(`거래총액 : ${total}}원`);

console.log("=====================end");

const total2 = traders
  .filter((trs) => trs.trader.city === "서울")
  .reduce((total, trs) => {
    total, trs.value;
  }, 0);

console.log(`총액:${total}`);

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
//김병모
let total1 = 0;
traders
  .filter((trad) => trad.year === 2023 && trad.trader.city === "대전")
  .map((trad) => (total1 += trad.value));

console.log(total1);

//강사님
let totalInDaejeon2023 = 0;
for (const trs of traders) {
  if (trs.year === 2023 && trs.trader.city === "대전") {
    totalInDaejeon2023 += trs.value;
  }
}
console.log(`2023년 대전 총 거래액: ${totalInDaejeon2023}`);

//강사님
const TotalInDaejeon2023 = traders
  .filter((trs) => trs.year === 2023 && trs.trader.city === "대전")
  .reduce((total, trs) => total + trs.value, 0);

console.log(`2023년 대전 총 거래액: ${TotalInDaejeon2023}`);

console.log("=======================1번");
// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
//김병모=강사님
const mappedBusan = [];
traders
  .filter((trad) => trad.trader.city === "부산")
  .map((trad) => mappedBusan.push(trad.trader.name));

console.log(mappedBusan);

//강사님
const nameListInBusan = [];
for (const trs of traders) {
  if (trs.trader.city === "부산") {
    nameListInBusan.push(trs.trader.name);
  }
}
console.log("부산 거래자 이름리스트: ", nameListInBusan);

console.log("=======================2번");

// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
//김병모
const filterValue = traders.map((trad) => trad.value);
const maxValue = filterValue.reduce((max, n) => (max < n ? n : max));

console.log(`최대값 : ${maxValue}`);

const result = traders.filter((trad) => trad.value === maxValue);

const realresult = result.map(
  (a) => `거래자 정보: (${a.trader.name},${a.trader.city}), 거래액 : ${a.value}`
);
console.log(realresult);

//강사님
let highestTransaction = traders[0];
for (const trs of traders) {
  if (highestTransaction.value < trs.value) {
    highestTransaction = trs;
  }
}
console.log(
  `가장 높은 거래액 정보 - 이름: ${highestTransaction.trader.name}, 도시: ${highestTransaction.trader.city}, 거래액: ${highestTransaction.value}`
);

//강사님
const HighestTransaction = traders.reduce((max, trs) =>
  max.value < trs.value ? trs : max
);

console.log(
  `가장 높은 거래액 정보 - 이름: ${HighestTransaction.trader.name}, 도시: ${HighestTransaction.trader.city}, 거래액: ${HighestTransaction.value}`
);

console.log("=======================3번");
// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
//강사님
const totalByCity = {}; // { 서울: 500000, 대전: 30032030, ... }

for (const trs of traders) {
  const city = trs.trader.city;
  if (totalByCity[city]) {
    // 이 도시는 한번 누적된 적이 있음
    totalByCity[city] += trs.value;
  } else {
    // 이 도시는 한번도 나온적이 없던 도시임
    totalByCity[city] = trs.value;
  }
}
console.log(totalByCity);

// const totalByCity = traders.reduce((totalByCity, trs) => {
//   const city = trs.trader.city;
//   if (totalByCity[city]) {
//     // 이 도시는 한번 누적된 적이 있음
//     totalByCity[city] += trs.value;
//   } else {
//     // 이 도시는 한번도 나온적이 없던 도시임
//     totalByCity[city] = trs.value;
//   }
//   return totalByCity;
// }, {});

// const totalByCity = traders.reduce((totalByCity, trs) => {
//   const city = trs.trader.city;
//   totalByCity[city] = (totalByCity[city] || 0) + trs.value;
//   return totalByCity;
// }, {});

console.log(totalByCity);

console.log("=======================4번");
// 5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**
//강사님
// 최종 결과 객체
const trsOver700kByYear = {};

for (const trs of traders) {
  if (trs.value >= 700000) {
    // 거래액 필터 조건
    const yearString = trs.year.toString();
    if (!trsOver700kByYear[yearString]) {
      trsOver700kByYear[yearString] = [trs];
    } else {
      // 지금 거래년도가 저장되어 있다면
      trsOver700kByYear[yearString].push(trs);
    }
  }
}
console.log(JSON.stringify(trsOver700kByYear, null, 2));

// 강사님
const TrsOver700kByYear = {};

traders.forEach((trs) => {
  if (trs.value >= 700000) {
    // 거래액 필터 조건
    const yearString = trs.year.toString();
    if (!TrsOver700kByYear[yearString]) {
      TrsOver700kByYear[yearString] = [trs];
    } else {
      // 지금 거래년도가 저장되어 있다면
      TrsOver700kByYear[yearString].push(trs);
    }
  }
});

// 강사님
const trsOver700kBYYear = traders
  .filter((trs) => trs.value >= 700000)
  .reduce((transactions, trs) => {
    const yearString = trs.year.toString();
    if (transactions[yearString]) {
      transactions[yearString] = [trs];
    } else {
      transactions[yearString].push(trs);
    }
    return transactions;
  }, {});

console.log(JSON.stringify(trsOver700kBYYear, null, 2));

console.log("=======================5번");
// 6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**
// 강사님
const trsDataByName = traders.reduce((averageList, trs) => {
  const name = trs.trader.name;
  if (!averageList[name]) {
    // 이 사람이름이 처음 등장했으면
    averageList[name] = { total: trs.value, count: 1 };
  } else {
    averageList[name].total += trs.value;
    averageList[name].count++;
  }
  return averageList;
}, {});
// console.log(trsDataByName);

// 평균 구하기
for (const key in trsDataByName) {
  trsDataByName[key].average =
    trsDataByName[key].total / trsDataByName[key].count;
}

console.log(trsDataByName);

console.log("=======================6번");
// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**
// 강사님

const result1 = traders.reduce((acc, { trader, year }) => {
  const { name } = trader;
  // 연도별 거래자 거래 횟수 집계
  const key = `${year}_${name}`;

  if (!acc[key]) {
    acc[key] = 1;
  } else {
    acc[key]++;
  }
  // 연도별 최대 거래 횟수 찾기
  const yearMaxKey = `max_${year}`;
  if (!acc[yearMaxKey] || acc[key] > acc[yearMaxKey].count) {
    acc[yearMaxKey] = { name, count: acc[key] };
  }
  return acc;
}, {});

console.log(result1);
// 결과 출력
console.log(
  `2022년 가장 많은 거래를 한 거래자: ${result1.max_2022.name}, 거래 횟수: ${result1.max_2022.count}`
);
console.log(
  `2023년 가장 많은 거래를 한 거래자: ${result1.max_2023.name}, 거래 횟수: ${result1.max_2023.count}`
);


console.log("=======================7번");


// 8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**
//강사님

// 거래액 오름차로 정렬
// 정렬은 원본을 손상시킴 - 안전하게 하려면 복사 후 정렬
const sortedTraders = traders.slice().sort((a, b) => a.value - b.value);
// console.log(sortedTraders);

// 중간값 거래 정보 찾기

// 배열의 요소 수가 홀수면 정확한 중간인덱스가 나오는데 
// 짝수면 중앙 두 값의 평균을 중간값으로 한다.

// 가운데 인덱스 찾기
const middleIndex = Math.floor(sortedTraders.length / 2);

let middleTradeInfo;
if (sortedTraders.length % 2 === 1) { // 배열의 요소 수가 홀수인 경우
  // 정확한 중간 인덱스를 지정
  middleTradeInfo = sortedTraders[middleIndex];
} else { // 짝수인 경우
  middleTradeInfo = [
    sortedTraders[middleIndex - 1], 
    sortedTraders[middleIndex]
  ];
}
console.log(middleTradeInfo);

console.log("=======================8번");

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**
//강사님
const trsCountByCity=traders.reduce((acc,{trader})=>{
  const {city}=trader;
  if(!acc[city]){
    acc[city]=1;
  }else{
    acc[city]++
  }
  return acc;
},{});
console.log(trsCountByCity);


console.log("=======================9번");

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
// 강사님

const sortedTransactions = traders.slice().sort((a, b) => a.value - b.value);
console.log(sortedTransactions);