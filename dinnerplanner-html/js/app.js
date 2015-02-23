$(function() {
	window.stage = "starter";
	window.stage = "main";
	window.stage = "dessert";

	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);

	// Controllers for Select Dish View
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var selectDishControllerView = new selectDishControllerView(selectDishView, model);

});
