let params = new URLSearchParams(window.location.search)
let emailRegister = params.get('emailRegister')

if(emailRegister){
  console.log('email recebido: ' +emailRegister)
} else{
  console.log('nenhum email recebido')
}

const emailText = document.getElementById('emailConfirmation')
  emailText.innerText = emailRegister
  emailText.style.fontWeight = 700
