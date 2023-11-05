
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js')
  .then(function(registration){
    console.log('Registration successful, scope is: ', registration.scope)
  })
  .catch(function(error){
    console.log('Service Worker registration failed, error', error)
  })
}


function typeWrite(e) {
  const textoArray = e.innerHTML.split('');
  e.innerHTML = ' ';
  textoArray.forEach(function (letter, i) {
      setTimeout(function () {
          e.innerHTML += letter;
      }, 50 * i);
  });
}

let openText = document.getElementById('openText')
typeWrite(openText)



let container = document.getElementById('container')
let textBox = document.getElementById('textBox')
let onLoadScreen = document.getElementById('onLoadScreen')

// verifica se não! existe o 'log' firstLoad
if(!sessionStorage.getItem('firstLoad')){
  console.log('dsad')
  sessionStorage.setItem('firstLoad', 'true')

  //add evento de load
  window.addEventListener('load',() => {
    
    console.log('loadComplete')
    //tempo após o load estar completo para tomar as devidas ações
    setTimeout(() => {
      onLoadScreen.style.display = 'none'
      container.style.display = 'flex'
    }, 5000)  
  })

}else {
  onLoadScreen.style.display = 'none'
  container.style.display = 'flex'
}



//verificar se ja existe o 'log' do primeiro fechamento da aba de msg
if(sessionStorage.getItem('msgWpp')){
  let logo = document.getElementById('logoUltra')
  
  textBox.style.display = 'none'
  container.classList.remove('opacity')
  logo.classList.add('visibleLogo')
}

//click na logo para abrir a caixa de msg
const openBtnTextArea = document.getElementById('logoUltra')
  .addEventListener('click', () => {
     let logo = document.getElementById('logoUltra')

     logo.classList.remove('visibleLogo')
     container.classList.toggle('opacity')
     textBox.style.display = 'flex'
     
  })


// fecha a aba de msg e cria o 'log' no session storage para posterior verificação
const closeBtnTextArea = document.getElementById('closeBtn')
  .addEventListener('click', () => {

    let logoUltra = document.getElementById('logoUltra')

    container.classList.toggle('opacity')
    textBox.style.display = 'none'
    logoUltra.classList.toggle('visibleLogo')

    sessionStorage.setItem('msgWpp', 'true')
  })


// Ssubmit da msg para o wpp após click e codificação e delay para ação
const submitMsgWpp = document.getElementById('submitMsgWpp')
  .addEventListener('click', () =>{
    var msgWpp = document.getElementById('msgWppText').value

    if(!msgWpp == ""){
      const encodedWpp = encodeURI(msgWpp)
      setTimeout(() =>{ window.location.href = `https://wa.me/5551995850151?text=${encodedWpp}`}, 500)
    }
  })
