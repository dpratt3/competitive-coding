/*
Anagrams
https://structy.net/problems/premium/intersection
16 September 2023
David Pratt
*/

const intersection = (a, b) => {
  // todo
  let newA = new Set(a)
  let newB = new Set(b)
  let intersect = []
  for(let i = 0; i < a.length; i++){
    if(newB.has(a[i])){
      intersect.push(a[i])
    }
  }
  return intersect;

};


