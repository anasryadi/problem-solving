function isValidSubsequence(array, sequence) {
    let pointer=0
    for(let i=0 ; i<array.length ; i++){
      if (array[i] == sequence[pointer]){
        pointer++
        if (pointer == sequence.length){
          return true
        }
      }
    }
    return false
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;