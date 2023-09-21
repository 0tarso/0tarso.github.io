const ratingOption = document.querySelectorAll('.iconRating')
const form = document.querySelector('form')
const selectedRating = document.getElementById('selectedRating')
const ratingPage = document.getElementById('ratingPage')
const thanksPage = document.getElementById('thanksPage')
const ratingResultText = document.getElementById('ratingResultText')
const subBtn = document.getElementById('subBtn')

let selectedValue = ''

ratingOption.forEach(function(btn){
  btn.addEventListener('click',function(){
    ratingOption.forEach(function(buttons){
      buttons.classList.remove('iconRatingSelected')
    })

    selectedRating.value = btn.value
    btn.classList.add('iconRatingSelected')
    if(selectedValue === ''){
      selectedValue = btn.value
    } else{
      selectedValue = ''
      selectedValue = btn.value
    }
  })
})

form.addEventListener('submit',function(ev){
  if(selectedValue === ''){
    ev.preventDefault()
    subBtn.innerText = 'SELECT AN OPTION'
  } else{
    ev.preventDefault()
    ratingPage.style.display = 'none'
    thanksPage.style.display = 'flex'
    ratingResultText.innerText = selectedValue
  }
})


