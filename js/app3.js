function arrayUserFill() {
    let rows = parseInt(prompt('Enter the number of rows for the two-dimensional array'));
    let cols = parseInt(prompt('Enter the number of columns for the two-dimensional array'));
  
    let arr = [];
  
    for (let i = 0; i < rows; i++) {
      let innerArray = [];
      for (let j = 0; j < cols; j++) {
        let element = prompt(`Enter the value for element:(${i},${j})`);
        innerArray.push(element);
      }
      arr.push(innerArray);
    }
  
    return arr;
}
  
let userArray = arrayUserFill();
console.log('User Array:', userArray);