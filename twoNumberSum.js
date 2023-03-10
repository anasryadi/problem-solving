function twoNumberSum(array, targetSum) {
    // Start a for loop
  
    const numbers = new Set(array)
  
  
    for(i=0; i < array.length; i++){
      if(numbers.has(targetSum - array[i]) && (array[i] + array[i]) != targetSum){
        return[array[i], targetSum - array[i]]
      }
    }
    return[]
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;