const email = document.getElementById('email')
const label = document.getElementById('labelEmail')
const subBtn = document.getElementById('subBtn')

function validate(e){
  e.preventDefault()
  
  if(email.value.includes('@' && '.com')){
    email.classList.remove('error')
    let emailRegister = email.value
    location.href = './thanks.html?emailRegister=' + encodeURIComponent(emailRegister)

  } else{
    email.classList.add('error')
    label.innerText = 'Valid email required'
    label.style.color = '#ff6257cc'
    email.value = ''
  }

}

subBtn.addEventListener('click',validate)