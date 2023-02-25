var seta = document.getElementById('icon')
var img = document.getElementById('seta')
var popup = document.getElementById('icones')
var setam = document.getElementById('icon-mobile')
var setamob = document.getElementById('seta-mob')
var card = document.querySelector ('section')
var texto = document.getElementById ('card2')
var foto_m = document.getElementById ('usuario')

function share(){
  seta.style.background= 'var(--Very-Dark-Grayish-Blue)'
  img.style.filter = 'brightness(2.5)'
  popup.style.display = 'flex'
}

function sair(){
  seta.style.background= 'var(--Light-Grayish-Blue)'
  img.style.filter = 'unset'
  popup.style.display = 'none'
}

function clicou(){
  var deviceWidth = window.innerWidth
  console.log(deviceWidth)
  if (deviceWidth >= 495){
    return
  }
  seta.style.display = 'none'
  popup.style.display = 'flex'
  card.style.padding = '2px 29px'
  texto.style.marginTop = '20px' 
  foto_m.style.opacity = '0'

  
}

function fechar(){
  popup.style.display = 'none'
  foto_m.style.opacity = '1'
  seta.style.display = 'block'
  seta.style.background= 'var(--Light-Grayish-Blue)'
  img.style.filter = 'unset'
  card.style.padding = '26px 23px'
  texto.style.marginTop = '0' 


}
