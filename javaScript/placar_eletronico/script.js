function ponto1(){
    var placar = document.querySelector("#pt1");
    var pt1 = Number(placar.innerHTML);
    pt1++;
    placar.innerHTML = pt1
}


function ponto2(){
    var placar = document.querySelector("#pt2");
    var pt2 = Number(placar.innerHTML);
    pt2++;
    placar.innerHTML = pt2
}

function zerar(){
    var placar1 = document.querySelector('#pt1');
    var placar2 = document.querySelector('#pt2');
     placar1.innerHTML = '0';
     placar2.innerHTML = '0';
}

function menos1(){
    var placar = document.querySelector("#pt1");
    var pt1 = Number(placar.innerHTML);
    if(pt1 > 0){
        pt1--
    };
    placar.innerHTML = pt1
}

function menos2(){
    var placar = document.querySelector("#pt2");
    var pt2 = Number(placar.innerHTML);
    if(pt2 > 0){
        pt2--
    };
    placar.innerHTML = pt2
}







function pontobasquete1(ponto){
    var placar = document.querySelector("#pt3")
    var pontoNaTela = Number(placar.innerHTML)
    pontoNaTela = pontoNaTela + ponto
    placar.innerHTML = pontoNaTela
}

function pontobasquete2(ponto){
    var placar = document.querySelector("#pt4")
    var pontoNaTela = Number(placar.innerHTML)
    pontoNaTela = pontoNaTela + ponto
    placar.innerHTML = pontoNaTela
}

function zerar(){
    var placar1 = document.querySelector('#pt3');
    var placar2 = document.querySelector('#pt4');
     placar1.innerHTML = '0';
     placar2.innerHTML = '0';
}