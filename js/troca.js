let fogo = document.getElementById("fogo")
let protetor = document.getElementById("protetor")
let coracoes = document.getElementById("coracoes")
let eternidade = document.getElementById("eternidade")
// Fogo Protetor Corações Eternidade Pergunta
function troca(){
    document.getElementById("um").style.zIndex = "-100"
    document.getElementById("dois").style.zIndex = "1"
    document.getElementById("tres").style.zIndex = "-100"
    document.getElementById("quatro").style.zIndex = "-100"
}
function troca2(){
    if(fogo.value == "fogo" & protetor.value == "protetor" & coracoes.value == "corações"
         & eternidade.value == "eternidade"){
        document.getElementById("um").style.zIndex = "-100"
        document.getElementById("dois").style.zIndex = "-100"
        document.getElementById("tres").style.zIndex = "1"
        document.getElementById("quatro").style.zIndex = "-100"
    }else{
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