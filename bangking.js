// deposit section
const depositButton = document.getElementById('deposit-button');
const singleDeposit = document.getElementById('single-deposit')

// total balance find
const depositBalance = document.getElementById('total-balance')

// withdraw section
const withdrawButton = document.getElementById('withdraw-button');
const withdrawInput = document.getElementById('withdraw-input')
const singleWithdraw = document.getElementById('single-withdraw')

const getInputValue = (inputId)=>{
    const depositInput = document.getElementById(inputId)
    const currentDeposit = depositInput.value;
    depositInput.value = ''
    return currentDeposit;
}

// deposit and total balance
depositButton.addEventListener('click', ()=>{
    const currentDeposit = getInputValue('deposit-input');
    
    const previousDeposit = singleDeposit.innerText;
    const totalDeposit = parseFloat(previousDeposit) + parseFloat(currentDeposit)
    
    if( (isNaN(currentDeposit)) || currentDeposit.trim() === '' || currentDeposit < 0 ){
        alert('Please give valid input')
        return;
    }

    singleDeposit.innerText = totalDeposit;

    // total balance
    const previousBalance = depositBalance.innerText;
    const totalBalance = parseFloat(previousBalance) + parseFloat(currentDeposit)
    depositBalance.innerText = totalBalance;

})

// withdraw
withdrawButton.addEventListener('click', ()=>{
    const previousWithdraw = singleWithdraw.innerText;
    const currentWithdraw = withdrawInput.value;
    
    if( (isNaN(currentWithdraw)) || currentWithdraw.trim() === '' || currentWithdraw < 0 ){
        alert('something is worng went')
        return;
    }
    
    const previousBalance = depositBalance.innerText;
    const totalBalance = parseFloat(previousBalance) - parseFloat(currentWithdraw)

    if( totalBalance < 0){
        alert('something is worng went')
        return;
    }else{
        const totalWithdraw = parseFloat(previousWithdraw) + parseFloat(currentWithdraw)
        singleWithdraw.innerText = totalWithdraw;
    }

    depositBalance.innerText = totalBalance;
    withdrawInput.value = ''
})

