let fogo = document.getElementById("fogo")
let protetor = document.getElementById("protetor")
let coracoes = document.getElementById("coracoes")
let eternidade = document.getElementById("eternidade")
// Fogo Protetor Corações Eternidade Pergunta
function trans(){
    let muda = document.getElementById("tUm")
    muda.style.transition = "transform 4s"
    muda.style.transform = "translateX(0%)"
}
function troca(){
    document.getElementById("um").style.zIndex = "-100"
    document.getElementById("dois").style.zIndex = "1"
    document.getElementById("tres").style.zIndex = "-100"
    document.getElementById("quatro").style.zIndex = "-100"
    let muda = document.getElementById("tDois")
    muda.style.transition = "transform 3.5s"
    muda.style.transform = "translateY(0%)"
}
function troca2(){
    if(fogo.value.toLowerCase() == "fogo" & protetor.value.toLowerCase() == "protetor" & coracoes.value.toLowerCase() == "corações"
         & eternidade.value.toLowerCase() == "eternidade"){
        let muda = document.getElementById("tTres")
        muda.style.transition = "all 4s"
        muda.style.transform = "scale(1.5)"
        document.getElementById("um").style.zIndex = "-100"
        document.getElementById("dois").style.zIndex = "-100"
        document.getElementById("tres").style.zIndex = "1"
        document.getElementById("quatro").style.zIndex = "-100"
    }else{
        let muda = document.getElementById("tQuatro")
        muda.style.transition = "all 5s"
        muda.style.transform = "rotate3d(-1, 1, -1, 1080deg)"
        document.getElementById("um").style.zIndex = "-100"
        document.getElementById("dois").style.zIndex = "-100"
        document.getElementById("tres").style.zIndex = "-100"
        document.getElementById("quatro").style.zIndex = "1"
        
    }
}
function troca3(){
    document.getElementById("um").style.zIndex = "-100"
    document.getElementById("dois").style.zIndex = "1"
    document.getElementById("tres").style.zIndex = "-100"
    document.getElementById("quatro").style.zIndex = "-100"
}