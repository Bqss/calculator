const calculator ={
    displayNumber : '0',
    operator : null,
    firstNumber : null,
    waitingForSecondNumber:true
};

function upadateDisplay(){
    document.querySelector('.resultScreeen').innerText = calculator.displayNumber;
}
function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator=  null;
    calculator.firstNumber = null ; 
    calculator.waitingForSecondNumber = true;
}

function inputDIgit(digit){
    if(calculator.displayNumber==='0'){
        calculator.displayNumber= digit;
    }else{
        calculator.displayNumber+=digit;
    }

}

const buttons = document.querySelectorAll(".button");

for(let button of buttons){
    button.addEventListener('click',function(event){
        const target = event.target;

        if (target.classList.contains('btn-ce')){
            clearCalculator();
            upadateDisplay();
            return;
        }
        if(target.classList.contains('btn-tanda')){
            
            calculator.displayNumber = calculator.displayNumber*-1;
            upadateDisplay();
            return;
        }   

        if(target.classList.contains('operator')){
            handleOperator(target.innerText);
            upadateDisplay();
            return;
        }
        if(target.classList.contains('btn-equals')){
            if(calculator.waitingForSecondNumber){
                alert( 'maaf angka kedua belum dimasukkan');
            }else if(calculator.operator==null){
                alert('maaf operator belum ditentukan ');
            }else{
                calculate();
            }

            return;
        }
        inputDIgit(target.innerText);
        upadateDisplay();
    });
}

function handleOperator(operator){
    if(calculator.waitingForSecondNumber){
        calculator.operator = operator;
        calculator.waitingForSecondNumber = false;
        calculator.firstNumber = calculator.displayNumber;

        calculator.displayNumber = '0';
    }else{
        alert('operator sudah ditentukan');
    }
}

function calculate(){
    let res ;
    
    if(calculator.operator==='+'){
        res = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    }else if (calculator.operator ==='-'){
        res = parseInt(calculator.firstNumber)- parseInt(calculator.displayNumber);
    }
    calculator.displayNumber=res;
    upadateDisplay();
    calculator.waitingForSecondNumber = true;
}


