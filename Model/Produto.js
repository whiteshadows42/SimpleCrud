class Produto{
	constructor(){
		this._id_produto = null;
		this._nome = null;
		this._quantidade_item = null;
		this._preco_item = null;
		this._fornecedor = null;
		this._forma_pagamento = null; 
		this._pronta_entrega = null;
		this._cod_promocional = null;
		this._descricao = null;	
	}
	get id_produto(){
		return this._id_produto;
	}
	set id_produto(id_produto){
		this._id_produto = id_produto;
	}
	get nome(){
		return this._nome;
	}
	set nome(nome){
		this._nome = nome;
	}
	get quantidade_item(){
		return this._quantidade_item;
	}
	set quantidade_item(quantidade_item){
		this._quantidade_item = quantidade_item;
	}
	get preco_item(){
		return this._preco_item;
	}
	set preco_item(preco_item){
		this._preco_item = preco_item;
	}
	get fornecedor(){
		return this._fornecedor;
	}
	set fornecedor(fornecedor){
		this._fornecedor = fornecedor;
	}
	get forma_pagamento(){
		return this._forma_pagamento;
	}
	set forma_pagamento(forma_pagamento){
		this._forma_pagamento = forma_pagamento;
	}
	get pronta_entrega(){
		return this._pronta_entrega;
	}
	set pronta_entrega(pronta_entrega){
		this._pronta_entrega = pronta_entrega;
	}
	get cod_promocional(){
		return this._cod_promocional;
	}
	set cod_promocional(cod_promocional){
		this._cod_promocional = cod_promocional;
	}
}