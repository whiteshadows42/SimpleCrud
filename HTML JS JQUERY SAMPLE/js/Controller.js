class Controller{
	constructor(){
		this._view = new View();
		this._model = new Cliente();
	}
	set view(newView){
		this._view = newView;
	}
	set model(newModel){
		this._model = newModel;
	}
	get view (){
		return this._view;
	}
	get model (){
		return this._model;
	}
	listar_todos(view){
		$.ajax({
		// Por motivos de segurança o browser proibe esse tipo de conexão a arquivos do sistema sem um sv
		// Então os dados estão gravados na variável ajax_list_result
			url: 'https://api.myjson.com/bins/1bykzq',
			type: 'GET',
			dataType: 'json'
		})
		// Em caso de sucesso na requisicão
		.done(function(result) {
			console.log("success");
			for(var i = 0; i < result.resultado.length; i++){
				view.format_to_table(result.resultado[i],i);
        	}
    	})
    	// Em caso de falha na requisicão
    	.fail(function(result) {
    		console.log("error");
    	})
	}
	recuperar_dados_editar(argument,id,view){
		$.ajax({
			// Por motivos de segurança o browser proibe esse tipo de conexão a arquivos do sistema sem um sv
			// Então os dados estão gravados na variável ajax_list_result
			url: argument,
			type: 'GET',
			dataType: 'json',
		})
		// Em caso de sucesso na requisicão
		.done(function(result) {
			console.log("success");
			view.preencherDados(result.resultado[id]);
		})
		// Em caso de falha na requisicão
		.fail(function(result) {
			console.log("error");
		})
	}
	adicionar(argument,button,view,obj){
		$("#btnSubmit").bind('click', function(event) {	
		var dados_tela = view.recuperarDados();
		obj.nome = dados_tela.nome;
		obj.sobrenome = dados_tela.sobrenome;
		obj.idade = dados_tela.idade;
		$.ajax({
				type: 'POST',
				data:obj,
				url: argument,
			})
			.done(function(result) {
				// Redireciona para a página inicial
				window.location.href = "/list.html"
			})
			.fail(function(result) {
				$("#errorMsg").slideDown();
			})
		});
	}
	editar(argument,button,id,view,obj){
		$("#btnSubmit").bind('click', function(event) {
		var dados_tela = view.recuperarDados();
		obj.nome = dados_tela.nome;
		obj.sobrenome = dados_tela.sobrenome;
		obj.idade = dados_tela.idade;
		obj.id = id;
			//Faz PUT de edição
			$.ajax({
				type: 'PUT',
				data: obj,
				url: argument,

			})
			.done(function(result) {
				//alert(JSON.stringify(obj));
				// Redireciona para a página inicial
				window.location.href = "/list.html"
			})
			.fail(function(result) {
				$("#errorMsg").slideDown();
			})
		});
		
	}
	delete(argument){
		$.ajax({ 
        	type: "DELETE",
        	url: argument,
        })
		.done(function(result) {
			//alert(JSON.stringify(obj));
			// Redireciona para a página inicial
			window.location.href = "/list.html"
		})
		.fail(function(result) {
			console.log(msg);
            alert("Erro :/ \n Contatar o suporte.");
		})

	}
}