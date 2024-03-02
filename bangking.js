// deposit section
const depositButton = document.getElementById('deposit-button');
const singleDeposit = document.getElementById('single-deposit')

// total balance find
const depositBalance = document.getElementById('total-balance')

// withdraw section
const withdrawButton = document.getElementById('withdraw-button');
const singleWithdraw = document.getElementById('single-withdraw')

const getInputValue = (inputId)=>{
    const inputField = document.getElementById(inputId)
    const currentAmount = inputField.value;
    inputField.value = ''
    return currentAmount;
}

// deposit and total balance
depositButton.addEventListener('click', ()=>{
    const currentAmount = getInputValue('deposit-input');
    const previousDeposit = singleDeposit.innerText;
    const totalDeposit = parseFloat(previousDeposit) + parseFloat(currentAmount)
    
    if( (isNaN(currentAmount)) || currentAmount.trim() === '' || currentAmount < 0 ){
        alert('Please give valid input')
        return;
    }

    singleDeposit.innerText = totalDeposit;

    // total balance
    const previousBalance = depositBalance.innerText;
    const totalBalance = parseFloat(previousBalance) + parseFloat(currentAmount)
    depositBalance.innerText = totalBalance;

})

// withdraw
withdrawButton.addEventListener('click', ()=>{
    const currentAmount = getInputValue('withdraw-input');
    const previousWithdraw = singleWithdraw.innerText;
    
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
        const totalWithdraw = parseFloat(previousWithdraw) + parseFloat(currentAmount)
        singleWithdraw.innerText = totalWithdraw;
    }

    depositBalance.innerText = totalBalance;
})

