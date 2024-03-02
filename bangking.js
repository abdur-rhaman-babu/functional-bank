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
    depositWithdraw.innerText = totalAmount;
}

// deposit and total balance
document.getElementById('deposit-button').addEventListener('click', ()=>{
    const currentDeposit = getInputValue('current-deposit')
    updateTotalField('previous-deposit',currentDeposit)

// update total
    const previousTotal = depositTotalBalance.innerText;
    const totalBalance = parseFloat(previousTotal) + parseFloat(currentDeposit);
    depositTotalBalance.innerText = totalBalance;
})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', ()=>{
    const withdrawText = document.getElementById('previous-withdraw')
    const currentWithdraw = getInputValue('current-withdraw')
    updateTotalField("previous-withdraw",currentWithdraw)

    // update total
    const previousTotal = depositTotalBalance.innerText;
    const totalBalance = parseFloat(previousTotal) - parseFloat(currentWithdraw);
    depositTotalBalance.innerText = totalBalance;
})





