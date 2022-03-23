window.onload = function(){setInterval("trocaCor()", 400);}


function trocaCor(){
    var pisca = document.querySelector("#tec");
    if(pisca.style.color == "blue")
    {
    pisca.style.color = "white";
    setTimeout("trocaCor();", 10000);
    }    
    else
    {
    pisca.style.color = "#b0eacd";
    setTimeout("trocaCor();", 10000);
    }
}

function mudarCor(){
    var btn = window.document.querySelector("button");

    btn.style.borderColor = "red";
    setTimeout(function() {
        btn.style.borderColor = "";
     }, 200);
    
}