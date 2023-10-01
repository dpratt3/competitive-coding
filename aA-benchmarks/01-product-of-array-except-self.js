/**
 * @param {number[]} nums
 * @return {number[]}
 */
const handleZeroes = (arr) => {
  let nonZeroArr;
  // only works if there is one and only one zero
  const zeroCount = arr.filter((x) => x === 0).length;
  if (zeroCount === 1) {
    nonZeroArr = arr.filter((x) => x !== 0);
    let allNonZeroProduct = nonZeroArr.reduce((a, b) => a * b, 1);
    let zeroIdx = arr.indexOf(0);
    arr[zeroIdx] = allNonZeroProduct;

    for (let i = 0; i < arr.length; i += 1) {
      if (i === zeroIdx) continue;
      arr[i] = 0;
    }
  }

  return arr;
};

const productExceptSelf = function (nums) {
  const zeroCount = nums.filter((x) => x === 0).length;
  if (zeroCount === 1) return handleZeroes(nums);

  // Your code here
  let products = [];
  let allProduct = nums.reduce((a, b) => a * b, 1);
  for (let i = 0; i < nums.length; i += 1) {
    products.push(allProduct / nums[i]);
  }

  return products;
};

module.exports = productExceptSelf;
