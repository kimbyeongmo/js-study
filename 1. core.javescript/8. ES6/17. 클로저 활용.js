
// const increase=(()=>{
//   let count=0;
//   return ()=>++count;
// })();

// const decrease=(()=>{
//   let count=0;
//   return ()=>--count;
// })();

// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(decrease());
// console.log(decrease());


// const countClosure=()=>{
//   let count=0;
//   const increase=()=>++count;
//   const decrease=()=>--count;

//   return{
//     increase:increase,
//     decrease:decrease
//   };
// };

const {increase, decrease}=countClosure(()=>{
  let count=0;
  const increase=()=>++count;
  const decrease=()=>--count;

  return{
    increase:increase,
    decrease:decrease
  };
})();
// console.log(typeof counter);

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());

