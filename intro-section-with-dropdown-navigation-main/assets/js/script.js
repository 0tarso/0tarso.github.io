const menuIcon = document.getElementById('menuIcon')
const menu = document.getElementById('menu')
const menuSetaF = document.getElementById('menuSetaF')
const menuSetaC = document.getElementById('menuSetaC')
const closeMenu = document.getElementById('closeMenuIcon')

const dropFeatures = document.getElementById('dropFeatures')
const featuresDrop = document.getElementById('featuresDrop')

const dropCompany = document.getElementById('dropCompany')
const companyDrop = document.getElementById('companyDrop')

function javaScriptActive(){
  if(window.innerWidth < 689){
    menu.style.display = 'none'
    menuIcon.addEventListener('click',function(){
      menu.style.display = 'flex'
    })

    closeMenu.addEventListener('click', function(){
      menu.style.display = 'none'      
    })

    featuresDrop.addEventListener('click', function(ev){
      ev.preventDefault()
      dropFeatures.classList.toggle('dropdownMenu')
      dropFeatures.classList.toggle('dropdownMenuVisible')
      menuSetaF.classList.toggle('menuSeta')
      menuSetaF.classList.toggle('menuSetaAberta')
    })

    companyDrop.addEventListener('click',function(ev){
      ev.preventDefault()
      dropCompany.classList.toggle('dropdownMenu')
      dropCompany.classList.toggle('dropdownMenuVisible')
      menuSetaC.classList.toggle('menuSeta')
      menuSetaC.classList.toggle('menuSetaAberta')
    })
  } else{
    menu.style.display = 'flex'
  }
}

window.addEventListener('load',javaScriptActive)
window.addEventListener('resize',javaScriptActive)