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

  }
  clearLast(){
  this.currentOperand =this.currentOperand.toString().slice(0,-1);
  }

  appendNumber(number){
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString()+number.toString();
  }
  chooseOperation(operation){

  }

  compute(operation){
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if(!isNaN(current)&&this.operation=='√'){computation=Mqth.sqrt(current);}
    if(isNaN(prev) ||isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation=this+prev;
        break;
      case '-':
        computation=this-prev;
        break;
      case '*':
        computation=this*prev;
        break;
      case '/':
        computation=this/prev;
        break;
      case '°':
        computation=this**prev;
        break;
      default:
      return;

    }
    this.readyToRest = true;
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }
  getDisplayNumber(number){
  }
  updateDisplay(){
    this.currentOperandTextElement.innerText =this.currentOperand;
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
  calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
})
