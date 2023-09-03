const contentFirst = document.getElementById('firstDec')
const contentSecond = document.getElementById('secondDec')
const firstBtn = document.getElementById('firstBtn')
const secondBtn = document.getElementById('secondBtn')

firstBtn.addEventListener('click', function(){
  secondBtn.classList.remove('aberto')
  secondBtn.classList.add('btn')
  contentSecond.style.display = 'none'
  firstBtn.classList.toggle('aberto') //troca os temas dos botões
  if(contentFirst.style.display === 'block'){  //se estiver com display block
    contentFirst.style.display = 'none'        //trocará para o none
    contentFirst.style.opacity = '0'           //e colocara a opacidade de volta a zero 
  }
  else {
    setTimeout(function(){
      contentFirst.style.opacity = '1'
      }, 100) 
    contentFirst.style.display = 'block'
    let offsetTop = contentFirst.offsetTop
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  }) 
    
  }
  
})

secondBtn.addEventListener('click', function(){
  firstBtn.classList.remove('aberto')
  firstBtn.classList.add('btn')
  contentFirst.style.display = 'none'
  secondBtn.classList.toggle('aberto')
  if(contentSecond.style.display === 'block'){
     contentSecond.style.display = 'none'
     contentSecond.style.opacity = '0'
  }else {
    setTimeout(function(){
      contentSecond.style.opacity = '1'
    }, 100)

    
    contentSecond.style.display = 'block'
    let offsetTop = contentSecond.offsetTop
  window.scrollTo({
    top:offsetTop,
    behavior:"smooth"
  }) 

  }
})

