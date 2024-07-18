// MINIMUM IN A ROTATED ARRAY.
// A sorted array of unique integers was rotated at an unknown pivot. For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20]. Find the index of the minimum element in this array.

// Input: [30, 40, 50, 10, 20]

// Output: 3

// Explanation: The smallest element is 10, and its index is 3.

// Input: [3, 5, 7, 11, 13, 17, 19, 2]

// Output: 7

// Explanation: The smallest element is 2, and its index is 7.

function findMinRotated(arr) {
    let left = 0;
    let right = arr.length -1
    let refIndex = -1;
  
  while ( left <= right){
    let middle = left + Math.floor((right - left) / 2);
    
    // Comparamos el valor de middle con la longitud del arreglo
    if (arr[middle] <= arr[arr.length -1]){
      refIndex = middle; // Reasignamos el valor de refIndex a middle
      right = middle -1; // Movemos right a la izda
    } else {
      left = middle + 1;
    }
  }
  
  return (`The minimum value is at index ${refIndex}`);
}

//findMinRotated([3, 5, 7, 11, 13, 17, 19, 2])
