$(function() {
	window.stage = "starter";
	window.stage = "main";
	window.stage = "dessert";

	//We instantiate our model

	var model = new DinnerModel();
	
	//And create the needed controllers and views

	// Controllers for Select Dish View
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var selectDishControllerView = new SelectDishControllerView(selectDishView, model);

	// Controllers for Sidebar View
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var sidebarControllerView = new SidebarControllerView(sidebarView, model);

	// Controllers for NumberOfGuests
	var numberOfGuestsView = new NumberOfGuestsView($("#numberOfGuestsView"), model);
	var numberOfGuestsControllerView = new NumberOfGuestsControllerView(numberOfGuestsView, model);

	//Controller and View
	var lasagneView = new LasagneView($("#lasagneView"), model);
	var lasagneControllerView = new LasagneControllerView(lasagneView, model);

	//View for the final page
	var finalView = new FinalView($("#finalView"), model);


	//var exampleView = new ExampleView($("#exampleView"), model);

});
