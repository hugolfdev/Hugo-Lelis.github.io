function mudarCor(){
    var btn = window.document.querySelector("button");
    btn.style.borderColor = "red";
    setTimeout(function(){
        btn.style.borderColor = "";

    }, 200);
    
}


(function(){
    var entrada = prompt("Qual e seu nome ?");
    var saida = document.querySelector(".mudar");
    saida.textContent= "Olá "+ entrada;
    return 0;
   
    if(entrada == ""){
        saida.textContent="Olá"
        return 0;
    };

    if(entrada == null){
        saida.textContent="Olá"
        return 0;
    };
})();

    

