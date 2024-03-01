const userEmail = document.getElementById('user-email')
const userPassword = document.getElementById('user-password')

document.getElementById('submit-btn').addEventListener('click', (e)=>{
    e.preventDefault()
  
    const userValidEmail = userEmail.value;
    const userValidPassword = userPassword.value;

    if( userValidEmail === 'baperbeta@gmail.com' && userValidPassword === 'secret00'){
       window.location.href = 'banking.html'
    }else{
        alert('you are not valid user')
    }
    userEmail.value = '';
    userPassword.value = '';
})

