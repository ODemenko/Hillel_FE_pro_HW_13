let inputString = prompt('Enter a string');
let charsToRemove = prompt('Enter characters to remove (comma-separated)').split(',');


function removeChar(str, chars) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (!chars.includes(char)) {
        result += char;
      }
    }
    return result;
}

let cutCharsToRemove = charsToRemove.map(char => char.trim());
console.log(removeChar(inputString, charsToRemove));
