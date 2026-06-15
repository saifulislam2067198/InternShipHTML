function calculate(operator = '+') {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultField = document.getElementById('result');

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    resultField.value = 'Invalid input';
    return;
  }

  let result;

  switch (operator) {
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 === 0 ? 'Cannot divide by zero' : num1 / num2;
      break;
    case '+':
    default:
      result = num1 + num2;
      break;
  }

  resultField.value = result;
}