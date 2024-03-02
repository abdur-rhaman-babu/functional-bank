// getInputvalue
const getInputValue = (inputId) =>{
    const inputField = document.getElementById(inputId);
    const currentAmount = inputField.value;
    inputField.value = '';
    return currentAmount;
}

const totalBalance = document.getElementById("total-balance")

// updateTotalField
const updateTotalField = (inputField,currentAmount) =>{
    const depositWithdraw = document.getElementById(inputField) 
    const previousAmount = depositWithdraw.innerText;
    const totalAmount = parseFloat(previousAmount) + parseFloat(currentAmount)
    depositWithdraw.innerText = totalAmount;  
}

// update total balance
const updateTotalBalance = (currentAmount, isAdd) =>{
    const previousTotal = totalBalance.innerText;
    
    if ( isAdd === true){
        totalBalance.innerText = parseFloat(previousTotal) + parseFloat(currentAmount);
    }else{
        totalBalance.innerText = parseFloat(previousTotal) - parseFloat(currentAmount);
    }
}

// deposit and total balance
document.getElementById('deposit-button').addEventListener('click', ()=>{
    const currentDeposit = getInputValue('current-deposit')
    if ( currentDeposit > 0){
        updateTotalField('previous-deposit',currentDeposit)
        updateTotalBalance(currentDeposit, true)
    }else{
        alert('invalid input')
    }
})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', ()=>{
    const currentWithdraw = getInputValue('current-withdraw')
    const currentBalance = totalBalance.innerText;
   
    if( currentWithdraw > 0 && 0 < currentBalance){
        updateTotalField("previous-withdraw",currentWithdraw)
        updateTotalBalance(currentWithdraw, false)
    }else{
        alert('invalid input')
    }
})





