const uniqueStr = (str) => {
  if (new Set(str.split("")).size === str.length) {
    return str.length;
  }

  return 0;
};

const longestNonRepeatingSubstring = function (string) {
  // Your code here
  if (!string.length) return 0;
  if (string.length === 1) return 1;
  if (new Set(string.split("")).size === 1) return 1;

  let allSubs = [];
  for (let j = 1; j < string.length; j += 1) {
    for (let i = 0; i < string.length; i += 1) {
      allSubs.push(string.slice(i, j));
    }
  }

  allSubs = allSubs.filter((x) => x !== ""); // remove empty

  let lengths = allSubs.map((x) => uniqueStr(x));

  return Math.max(...lengths);
};

module.exports = longestNonRepeatingSubstring;
