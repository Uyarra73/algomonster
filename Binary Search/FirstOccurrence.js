// First ocurrence

function findFirstOccurrence(arr, target) {
    
  let left = 0;
  let right = arr.length -1;
  let refIndex = -1;
  
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    
    if (arr[mid] === target) {
      refIndex = mid;
      right = mid -1;
      return (`${target} appears at index ${refIndex} for the first time`)
    }else if (arr[mid] < target){
      left = mid + 1;
    } else {
      right = mid -1;
    }
  }
    return (`Number ${target} does not exist in this array. Try again`);
}

//findFirstOccurrence([2, 3, 5, 7, 11, 13, 17, 19], 19);