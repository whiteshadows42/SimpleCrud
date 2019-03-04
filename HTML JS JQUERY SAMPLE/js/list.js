$(document).ready(function($) {
	var controller = new Controller();
	var view = controller.view;
	controller.listar_todos(view);
});