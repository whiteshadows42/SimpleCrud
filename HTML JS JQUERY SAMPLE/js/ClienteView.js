class View{
	format_to_table(argument, number) {
		var s = '' +
		'<tr>' +
		'	<th scope="row">' + number + '</th>' +
		'	<td>' + argument.nome + '</td>' +
		'	<td>' + argument.sobrenome + '</td>' +
		'	<td>' + argument.idade + '</td>' +
		'	<td> <a href="criareditar.html#'+number+'"> Editar </a> </td>' +
		'</tr>';
		$("#pTable tbody").append(s);
	}
	preencherDados(argument){
		$("#nome").val(argument.nome);
		$("#sobrenome").val(argument.sobrenome);
		$("#idade").val(argument.idade);
	}

}