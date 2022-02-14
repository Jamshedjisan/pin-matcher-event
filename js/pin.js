function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pinResult = getPin();
    document.getElementById('display-pin').value = pinResult;
}

document.getElementById('typed-numbers').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('input-number');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

});



function submitBtn(){
   const generateNumber = document.getElementById('display-pin').value;
   const inputNumber = document.getElementById('input-number').value;
   const successMessage = document.getElementById('success-message');
   const errorMessage = document.getElementById('error-message');
    if(generateNumber == inputNumber){
     
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }
    else{
      
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }

}