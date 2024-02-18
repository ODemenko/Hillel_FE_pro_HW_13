const x = parseFloat(prompt('Enter the first number'));
const char = prompt('Enter the operation character (+, -, *, /, %, ^)');
const y = parseFloat(prompt('Enter the second number'));
const result = calc(x, char, y);


function calc(x, char, y) {
    let result;
  
    switch (char) {
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
        break;
      case '%':
        result = x % y;
        break;
      case '^':
        result = Math.pow(x, y);
        break;
      default:
        result = 'Invalid operator';
    }
  
    return result;
}

console.log(`Result of ${x} ${char} ${y} =`, result);