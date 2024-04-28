const AllButton = document.querySelectorAll("button")
const topCalculatorBlock = document.querySelector(".topCalculatorBlock")
let saveNumber = ''
let result = ''
let operator = '';

function calculator(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        case '**':
            return num1 ** num2;
        default:
            return NaN;
    }
}

AllButton.forEach((button) => {
    button.addEventListener("click", () => {
        const btnString = button.textContent

        switch (btnString) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
            case '**':
                saveNumber = parseFloat(topCalculatorBlock.textContent);
                operator = btnString;
                topCalculatorBlock.textContent = '';
                break;
            case 'C':
                saveNumber = '';
                result = '';
                operator = '';
                topCalculatorBlock.textContent = '';
                break;
            case '=':
                if (operator && saveNumber) {
                    const secondNumber = parseFloat(topCalculatorBlock.textContent);
                    result = calculator(operator, saveNumber, secondNumber)
                    topCalculatorBlock.textContent = result
                }
                break;
            default:
                topCalculatorBlock.textContent += btnString;
        }
    })
});
