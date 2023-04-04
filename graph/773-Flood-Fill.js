/*
773. Flood Fill
4 April 2023
https://leetcode.com/problems/flood-fill/
David Pratt
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// Flood-fill (node): https://en.wikipedia.org/wiki/Flood_fill
//  1. If node is not Inside return.
//  2. Set the node
//  3. Perform Flood-fill one step to the south of node.
//  4. Perform Flood-fill one step to the north of node
//  5. Perform Flood-fill one step to the west of node
//  6. Perform Flood-fill one step to the east of node
//  7. Return.

performFloodFill = (image, sr, sc, rows, columns, source, color) => {
  // if indices are out of bounds, return
  if (sr < 0 || sc < 0 || sr >= rows || sc >= columns) return;
  if (image[sr][sc] != source || image[sr][sc] === color) return;

  image[sr][sc] = color;

  // recursively call the perform flood fill in DFS fashion (stack)
  performFloodFill(image, sr - 1, sc, rows, columns, source, color); // south
  performFloodFill(image, sr, sc + 1, rows, columns, source, color); // east
  performFloodFill(image, sr + 1, sc, rows, columns, source, color); // north
  performFloodFill(image, sr, sc - 1, rows, columns, source, color); // west
};

floodFill = (image, sr, sc, color) => {
  const row = image.length; // rows
  const col = image[0].length; // columns

  const source = image[sr][sc];

  performFloodFill(image, sr, sc, row, col, source, color);

  return image;
};
