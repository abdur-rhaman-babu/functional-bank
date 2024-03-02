// total balance find
const depositBalance = document.getElementById('total-balance')

// InputField
const getInputValue = (inputId)=>{
    const inputField = document.getElementById(inputId)
    const currentAmount = inputField.value;
    inputField.value = ''
    return currentAmount;
}

// innerText
const getInputInnerText = (innerTextId)=>{
    const singleAmount = document.getElementById(innerTextId)
    return singleAmount;
}

// deposit and total balance
document.getElementById('deposit-button').addEventListener('click', ()=>{
    const currentAmount = getInputValue('deposit-input');
    const singleAmount = getInputInnerText('single-deposit')

    const previousDeposit = singleAmount.innerText;
    const totalDeposit = parseFloat(previousDeposit) + parseFloat(currentAmount)
    
    if( (isNaN(currentAmount)) || currentAmount.trim() === '' || currentAmount < 0 ){
        alert('Please give valid input')
        return;
    }

    singleAmount.innerText = totalDeposit;

    // total balance
    const previousBalance = depositBalance.innerText;
    const totalBalance = parseFloat(previousBalance) + parseFloat(currentAmount)
    depositBalance.innerText = totalBalance;

})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', ()=>{
    const currentAmount = getInputValue('withdraw-input');
    const singleAmount = getInputInnerText('single-withdraw')
    const previousWithdraw = singleAmount.innerText;
    const totalWithdraw = parseFloat(previousWithdraw) + parseFloat(currentAmount)
    
    if( (isNaN(currentAmount)) || currentAmount.trim() === '' || currentAmount < 0 ){
        alert('something is worng went')
        return;
    }
    
    const previousBalance = depositBalance.innerText;
    const totalBalance = parseFloat(previousBalance) - parseFloat(currentAmount)

    if( totalBalance < 0){
        alert('something is worng went')
        return;
    }else{
        singleAmount.innerText = totalWithdraw;
    }

    depositBalance.innerText = totalBalance;
})

