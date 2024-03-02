// getInputvalue
const getInputValue = (inputId) =>{
    const inputField = document.getElementById(inputId);
    const currentAmount = inputField.value;
    inputField.value = '';
    return currentAmount;
}

const depositTotalBalance = document.getElementById("total-balance")

// updateTotalField
const updateTotalField = (inputField,currentAmount) =>{
    const depositWithdraw = document.getElementById(inputField) 
    const previousAmount = depositWithdraw.innerText;
    const totalAmount = parseFloat(previousAmount) + parseFloat(currentAmount)

    if(isNaN(currentAmount) || currentAmount.trim() === '' || currentAmount < 0){
        alert('valid input')
        return;
    }

    depositWithdraw.innerText = totalAmount;
}

// update total balance
const updateTotalBalance = (currentDeposit, isAdd) =>{
    const previousTotal = depositTotalBalance.innerText;
    if ( isAdd === true){
        depositTotalBalance.innerText = parseFloat(previousTotal) + parseFloat(currentDeposit);
    }else{
        depositTotalBalance.innerText = parseFloat(previousTotal) - parseFloat(currentDeposit);
    }
}

// deposit and total balance
document.getElementById('deposit-button').addEventListener('click', ()=>{
    const currentDeposit = getInputValue('current-deposit')
    updateTotalField('previous-deposit',currentDeposit)
    updateTotalBalance(currentDeposit, true)
})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', ()=>{
    const currentWithdraw = getInputValue('current-withdraw')
    updateTotalField("previous-withdraw",currentWithdraw)
    updateTotalBalance(currentWithdraw, false)
})





