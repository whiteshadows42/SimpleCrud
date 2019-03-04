function urlParam(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results==null) {
			return null;
		}
		return decodeURI(results[1]) || 0;
}
$(document).ready(function($) {
	var controller = new Controller();
	$("#errorMsg").hide()
	// Obtém o ID da url ex:
	// www.teste.com/index.html?id=3
	// Porém como não possuimos um servidor local, o ?id=3 não é interpretado
	// Mas esta pagina esteja em um servidor wamp/lamp, o id será obtido corretamente
	let id = urlParam("id");
	var url = "https://api.myjson.com/bins/1bykzq";
	if(id!=null){
		controller.recuperar_dados_editar(url,id,controller.view);
			controller.editar('edit',"#btnSubmit",id,controller.view,controller.model);
	}else{
		controller.adicionar('create?nome=aaaa?sobrenome=bbbb?idade=12',"#btnSubmit",controller.view,controller.model);
	}
});
