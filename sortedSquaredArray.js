function sortedSquaredArray(array) {
  const newArr = [];

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const l = Math.abs(array[left]);
    const r = Math.abs(array[right]);
    if (l >= r) {
      newArr.unshift(l * l);
      left++;
    } else if (r >= l) {
      newArr.unshift(r * r);
      right--;
    }

    // else if(r === l){
    //   newArr.unshift(r*r)
    //   right--
    //   left++
    // }
  }

  return newArr;

  // return array.map(v => v * v).sort((a,b)=> a-b)
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
