// DOM para apelidos para minhas variaveis

const hora= document.querySelector('#horas')
const minuto= document.querySelector('#minutos')
const segundo= document.querySelector('#segundos')

//evento

const relogio= setInterval(tempo, 1000) //funçao intervalo de tempo

//funcao
function tempo(){
    let dia= new Date()// pegando info do sistema 
    let hr= dia.getHours()
    let min= dia.getMinutes()
    let seg= dia.getSeconds()

    if (hr<10) {
        hr= "0" +hr 
    }

    if (min<10) {
        min= "0" +min
    }

    if (seg<10) {
        seg= "0" +seg
    }

    hora.textContent = hr
    minuto.textContent = min
    segundo.textContent = seg 
}