/*
Pair Sum
https://structy.net/problems/premium/pair-sum
27 August 2023
David Pratt
*/

const pairSum = (numbers, targetSum) => {
  // todo
  let result = [];
  for(let i = 0; i < numbers.length; i++){
    console.log(i);
    for(let j = i + 1; j <= numbers.length; j++){
      console.log(j);
      if(numbers[i] + numbers[j] === targetSum){
        result.push(i, j)
        break;
      }
    }
  }
  return result;
};

