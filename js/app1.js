const array = [2, 'qwe', 5, 'err', 5];

console.log('Arithmetic Mean:', calculateNumericMean(array)); 

function calculateNumericMean() {
    let sum = 0;
    let count = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number' && !isNaN(array[i])) {
        sum += array[i];
        count++;
      }
    }
  
    if (count === 0) {
      return 0;
    }
    const mean = sum / count;
    return mean;
  }
  
