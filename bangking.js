// deposit section
const depositButton = document.getElementById('deposit-button');
const depositInput = document.getElementById('deposit-input')
const singleDeposit = document.getElementById('single-deposit')

// total balance find
const depositBalance = document.getElementById('total-balance')

// withdraw section
const withdrawButton = document.getElementById('withdraw-button');
const withdrawInput = document.getElementById('withdraw-input')
const singleWithdraw = document.getElementById('single-withdraw')

// deposit and total balance
depositButton.addEventListener('click', ()=>{
    const previousDeposit = singleDeposit.innerText;
    const currentDeposit = depositInput.value;
    const totalDeposit = parseFloat(previousDeposit) + parseFloat(currentDeposit)
    
    if( (isNaN(currentDeposit)) || currentDeposit.trim() === ''){
        alert('Please give valid input')
        return;
    }

    singleDeposit.innerText = totalDeposit;


    // total balance
    const previousBalance = depositBalance.innerText;
    const totalBalance = parseFloat(previousBalance) + parseFloat(currentDeposit)
    depositBalance.innerText = totalBalance;

    depositInput.value = ''
})

// withdraw
withdrawButton.addEventListener('click', ()=>{
    const previousWithdraw = singleWithdraw.innerText;
    const currentWithdraw = withdrawInput.value;
    
    if( (isNaN(currentWithdraw)) || currentWithdraw.trim() === ''){
        alert('Please give valid input')
        return;
    }
    
    const previousBalance = depositBalance.innerText;
    const totalBalance = parseFloat(previousBalance) - parseFloat(currentWithdraw)

    if( totalBalance < 0){
        alert('Insufficient Balance')
        return;
    }else{
        const totalWithdraw = parseFloat(previousWithdraw) + parseFloat(currentWithdraw)
        singleWithdraw.innerText = totalWithdraw;
    }

    depositBalance.innerText = totalBalance;

    withdrawInput.value = ''
})

