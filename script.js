const calculatorTitle = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
const resetButton = document.getElementById('resetButton');


let initialValue = 0;
let operatorValue = '';
let isWaiting = false;

// console.log(initialValue);
// console.log(operatorValue);
// console.log(isWaiting);



// console.log(buttons);

function sendNumberValue(number){
    // console.log(number);
    // calculatorTitle.textContent = number;

    if(isWaiting){
        calculatorTitle.textContent = number;
        isWaiting = false;
        // console.log(calculatorTitle.textContent);
        // console.log(isWaiting);
    }
    else
    {
        const displayValue = calculatorTitle.textContent;
        calculatorTitle.textContent = displayValue === '0' ? number : displayValue + number;
        // console.log(displayValue);
        // console.log(calculatorTitle.textContent);
        
    }
    
}

function addDecimal(){
    if(!calculatorTitle.textContent.includes('.'))
    {
        calculatorTitle.textContent = `${calculatorTitle.textContent}.`;
        // console.log(calculatorTitle.textContent);
    }
}


function useOperator(operator){
    const currentValue = Number(calculatorTitle.textContent);
    // console.log(currentValue);
    // console.log(initialValue);

    if(operatorValue && isWaiting){
        operatorValue = operator;
        // console.log(operatorValue);
        // console.log('burasi burasi');
        // console.log(initialValue);
        // console.log(currentValue);
        return;
    }

    if(!initialValue){
        initialValue = currentValue;
        // console.log(initialValue);
        // console.log('buradayım');
    }
    else
    {
        const calculation = calc[operatorValue](initialValue,currentValue);
        calculatorTitle.textContent = calculation;
        initialValue = calculation;
        // console.log(calculation);
        // console.log(calculatorTitle.textContent);
        // console.log(initialValue);
        // console.log('simdi buradayim');
    }
    isWaiting = true;
    operatorValue = operator;
    // console.log(isWaiting);
    // console.log(operatorValue);
}


const calc = {
    '/':(firstNumber,secondNumber) => firstNumber/secondNumber,
    '*':(firstNumber,secondNumber) => firstNumber*secondNumber,
    '+':(firstNumber,secondNumber) => firstNumber+secondNumber,
    '-':(firstNumber,secondNumber) => firstNumber-secondNumber,
    '=':(firstNumber,secondNumber) => secondNumber,
}




buttons.forEach((button) => {
    if(button.classList.length === 0 ){
        button.addEventListener('click',()=>sendNumberValue(button.value));
    }else if(button.classList.contains('operator')){
        button.addEventListener('click',()=>useOperator(button.value));
    }else if(button.classList.contains('decimal')){
        button.addEventListener('click',()=>addDecimal());
    }
});


function resetAll(){
    calculatorTitle.textContent = '0';
    initialValue = 0;
    operatorValue = '';
    isWaiting = false;
}



resetButton.addEventListener('click',resetAll);
