let result = document.getElementById('result');

function addValue(value) {
  if (value == '=') {
    calculate();
  } else {
    result.value += value;
  }
}

function clearDisplay() {
  result.value = '';
}

function del() {
  let currentValue = result.value;
  result.value = currentValue.slice(0, -1);
}

function calculate() {
  let expression = result.value;
  let operators = ['+', '-', '*', '/'];

  for (let i = 0; i < operators.length; i++) {
    let operatorIndex = expression.indexOf(operators[i]);

    if (operatorIndex !== -1) {
      let leftOperand = parseFloat(expression.slice(0, operatorIndex));
      let rightOperand = parseFloat(expression.slice(operatorIndex + 1));
      let operator = expression.charAt(operatorIndex);

      if (operator === '+') {
        result.value = leftOperand + rightOperand;
      } else if (operator === '-') {
        result.value = leftOperand - rightOperand;
      } else if (operator === '*') {
        result.value = leftOperand * rightOperand;
      } else if (operator === '/') {
        result.value = leftOperand / rightOperand;
      }

      break;
    }
  }
}


