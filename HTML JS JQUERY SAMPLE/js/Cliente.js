class Cliente{
	constructor(){
		this._id = null;
		this._nome = null;
		this._sobrenome = null;
		this._idade = null;
	}
	get id(){
		return this._id;
	}
	set id(id){
		this._id = id;
	}
	get nome(){
		return this._nome;
	}
	set nome(nome){
		this._nome = nome;
	}
	get sobrenome(){
		return this._sobrenome;
	}
	set sobrenome(sobrenome){
		this._sobrenome = sobrenome;
	}
	get idade(){
		return this._idade;
	}
	set idade(idade){
		this._idade = idade;
	}
}