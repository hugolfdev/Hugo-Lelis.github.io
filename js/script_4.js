window.onload = function(){setInterval("trocaCor()", 1000);}


function trocaCor(){
    var pisca = document.querySelector("#tec");
    if(pisca.style.color == "orange")
    {
    pisca.style.color = "gray";
    setTimeout("trocaCor();", 1000);
    }    
    else
    {
    pisca.style.color = "orange";
    setTimeout("trocaCor();", 1000);
    }
}

function mudarCor(){
    var btn = window.document.querySelector("button");

    btn.style.borderColor = "red";
    setTimeout(function() {
        btn.style.borderColor = "";
     }, 200);
    
}