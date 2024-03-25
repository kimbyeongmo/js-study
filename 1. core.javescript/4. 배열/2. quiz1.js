var scores=[83, 99, 100, 57,];
total =0;
for(var i =0; i<scores.length;i++){
  total+=scores[i]
}
average=total/scores.length
console.log(`총점 : ${total}점, 평균 ${average}점`)




// for (var s of scores) {
//   total += s;
// }

// var average = total / scores.length;