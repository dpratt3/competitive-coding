/*
832. Flipping an Image
https://leetcode.com/problems/flipping-an-image/
8 July 2023
David Pratt
*/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */

const arrayInverter = arr => {
   for(let i = 0; i < arr.length; i += 1){
      if(arr[i] === 0) arr[i] = 1;
      else arr[i] = 0;
   }

   return arr;
}

var flipAndInvertImage = function(image) {

   // first, reverse each row
   image.map(x => x.reverse());

   // then invert
   return image.map(x => arrayInverter(x));
}

