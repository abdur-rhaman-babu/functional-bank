// find element
const depositeInput = document.getElementById('deposit-input')
const depositBtn = document.getElementById('deposit-btn')
const depositAmount = document.getElementById('deposit-amount')
const depositTotalBalance = document.getElementById('deposit-total-balance')

// withdraw
const withdrawInput = document.getElementById('withdraw-input')
const withdrawBtn = document.getElementById('withdraw-btn')
const withdrawAmount = document.getElementById('withdraw-amount')

// deposite amount
depositBtn.addEventListener('click', ()=>{
    const previousDeposit = depositAmount.innerText;
    const currentDeposit = depositeInput.value
    const totalDeposite = parseFloat(previousDeposit) + parseFloat(currentDeposit);
    
    if (isNaN(currentDeposit) || currentDeposit.trim() === '') {
        alert('Invalid Input')
        return;
    }

    depositAmount.innerText = totalDeposite;

    // update total balance
    const previousBalance = depositTotalBalance.innerText;
    const totalBalance = parseFloat(previousBalance) + parseFloat(currentDeposit)
    depositTotalBalance.innerText = totalBalance
    depositeInput.value = ''
})


// withdraw amount
withdrawBtn.addEventListener('click', ()=>{
    const previousWithdraw = withdrawAmount.innerText;
    const currentWithdraw = withdrawInput.value;
    const previousBalance = depositTotalBalance.innerText;
    const totalBalance = parseFloat(previousBalance) - parseFloat(currentWithdraw)

    if (isNaN(currentWithdraw) || currentWithdraw.trim() === '') {
        alert('Invalid Input')
        return;
    }
    
    if( totalBalance < 0 ){
        alert('Insufficient Balance')
        return withdrawAmount.innerText = previousWithdraw;
    }else{
         const totalWithdraw = parseFloat(previousWithdraw) + parseFloat(currentWithdraw);
        withdrawAmount.innerText = totalWithdraw;
    }
   
    depositTotalBalance.innerText = totalBalance;
    withdrawInput.value = ''
})

