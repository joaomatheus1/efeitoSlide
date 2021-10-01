function mover(elem, inicio, fim, passo, callback) {
    const novoInicio = inicio - passo
    if(novoInicio >= fim){
        elem.style.left = novoInicio + 'px'
        setTimeout(() => mover(elem, novoInicio, fim, passo, callback), 5)
    }else{
        callback()
    }
}

function slider (){
    const elementos = document.querySelectorAll('.slider  p')
    const slides = Array.from(elementos)
    exibirSlide(slides, slides[0])
}

function exibirSlide(slides, slide) {
   slide.style.display = 'block'

   const inicio = innerWidth
   const fim = -slide.clientWidth

   slide.style.left = '${inicio}px'

   mover(slide, inicio, fim, 5, () => {
       slide.style.display = 'none'
       exibirSlide(slides, getProximo(slides, slide))
   })
}

function getProximo (lista, atual) {
   const i = lista.indexOf(atual) + 1
   return i < lista.length ? lista[i] : lista[0]
}

slider()