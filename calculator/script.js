class Calculator{
  constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement;
    this. currentOperandTextElement = currentOperandTextElement;
    this.readyToReset = false;
    this.clear();
  }
  clear(){
    this.currentOperand ='';
    this.previousOperand ='';
    this.operation= undefined;
  }

  delete(){
    this.currentOperand ='';
  }
  clearLast(){
  this.currentOperand =this.currentOperand.toString().slice(0,-1);
  }

  appendNumber(number){
    if (number === '.' && this.currentOperand.includes('.')) return;
    if (this.currentOperand.toString().length>=15) {alert('Max digits count!'); return;}
    this.currentOperand = this.currentOperand.toString()+number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;


    // if (this.operation=='√'){
    //   console.log('wut');
    //   computation=Math.sqrt(this.currentOperand);
    //   this.readyToRest = true;
    //   this.currentOperand = computation;
    //   this.operation = undefined;
    //   this.previousOperand = '';
    // }


    if (this.previousOperand !== '' && this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute(){
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if(isNaN(prev) ||isNaN(current)) return;
    switch (this.operation) {
      case '+':
      computation = prev + current;
        break;
      case '-':
        computation=prev-current;
        break;
      case '*':
        computation=prev*current;
        break;
      case '÷':
        computation=prev/current;
        break;
      case '°':
        computation=Math.pow(prev,current);
        break;
      case '√':
        computation=Math.pow(prev, 1/current);
        break;
      default:
      return;

    }
    this.readyToRest = true;
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }


  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }

  finalDisplay() {
    this.currentOperandTextElement.innerText =
      this.getFinalNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getFinalNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }


  getFinalNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      if(decimalDigits.toString().length>9){
        return Math.round((number + Number.EPSILON) * 100) / 100
      }
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }
}






const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if(calculator.previousOperand === "" &&
      calculator.currentOperand !== "" &&
  calculator.readyToReset) {
          calculator.currentOperand = "";
          calculator.readyToReset = false;
      }
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay();
  })
})

operationButtons.forEach(button =>{
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay();
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.finalDisplay();
})

allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
})
