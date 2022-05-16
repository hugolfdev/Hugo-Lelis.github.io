function validateform(){  
  var form = document.getElementById("myform");
  if( document.forms[0].email.value==""  || document.forms[0].email.value.indexOf('@')==-1 || document.forms[0].email.value.indexOf('.')==-1 ){
	  alert( "Informe um E-MAIL válido!" );
	  return false;
	}

  if(myform.nome.value == "" || myform.nome.value == null || myform.nome.value.lenght < 3) {
    //É mostrado um alerta, caso o campo esteja vazio.
    alert("Indique o seu nome.");
    //Foi definido um focus no campo.
    myform.nome.focus();
    //o form não é enviado.
    return false;
  }

  if(myform.mgs_user.value == "" || myform.mgs_user.value == null) {
    alert("Fale sobre qual assunto deseja tratar.");
    myform.mgs_user.focus();
    return false;
  }

  alert('Cadastrado com sucesso');
  

}  