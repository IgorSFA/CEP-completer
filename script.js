$('#cep').focusout(recuperaDados);
$('#cep').keydown(function(tecla){
	if(tecla.keyCode === 13){
		recuperaDados();
	}
});

function recuperaDados(){
	var cep = $('#cep').val();
	if(Number(cep)!==0){
		var url = 'http://api.postmon.com.br/v1/cep/';
		var req =$.getJSON(url+cep);
			req.done(completaForm);
			req.fail(erro);
	}else{
		alert("input inválido");
	}
}
function erro(dado){
	console.log(dado);
}


function completaForm(dado){
	//alert(dado);
	$('#rua').val(dado.logradouro);
	$('#bairro').val(dado.bairro);
	$('#cidade').val(dado.cidade);
	$('#estado').val(dado.estado);
}