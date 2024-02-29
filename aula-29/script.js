//true - disponivel
//false - indisponivel
var poltronas = [true, false,true, false, true, false,true, true, false,true,,true, false,true, false, true, false,true, true, false,true];

function carregarPoltronas(){
    var imagens = document.getElementsByTagName("img");
    for (var i = 0; i < imagens.length; i++){
        if(poltronas[i]){
            imagens[i].src = "./img/PoltronaLivre.png";
        }else{
            imagens[i].src = "./img/PoltronaOcupada.png";
        } 
        
    }
}
function escolhePoltrona(){
    var imagens = document.getElementsByTagName("img");
    for (var i = 0; i < poltronas.length; i++){
        if(poltronas[i]){
            imagens[i].src = "./img/PoltronaEscolhida.png";

            var quer = confirm("Deseja selecionar ess poltrona?");
            if(quer){
                break;
            } else{
                imagens[i].src = "./img/PoltronaLivre.png";
            }
           
        }
    }
}

function escolhaDupla(){
    var imagens = document.getElementsByTagName("img");
    for (var i = 0; i < poltronas.length; i++){
        if(poltronas[i] && poltronas[i+1]){

            imagens[i].src = "./img/PoltronaEscolhida.png";
            imagens[i+1].src = "./img/PoltronaEscolhida.png";

            var quer = confirm("Deseja selecionar essas poltronas?");
            if(quer){
                break;
            } else{
                imagens[i].src = "./img/PoltronaLivre.png";
                imagens[i+1].src = "./img/PoltronaLivre.png";
            }
           
        }
    }
}
