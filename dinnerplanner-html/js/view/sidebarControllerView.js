var SidebarControllerView = function(view, model) {

	// Handles the number of guests
	$('#editGuestNumber').bind('input', function() {	// bind gets the functions this value
		model.setNumberOfGuests($(this).val());			// gets ALL matched elements (will only be one though)
	});

	// Handles the confirm button
	// Shows numberOfGuestsView + totalCostView
	$('#confirmButton').click(function() {
		$('#mainbar').hide();
		$('#sidebarView').hide();
		$('#lasagneView').hide();
		$('#selectDishView').hide();
		$('#numberOfGuestsView').show();
		$('#totalCostView').show();
	});

	// Handles the remove starter button in the sidebar
	// Shows the starters after removing the previously chosen starter
	$('#removeStarterButton').click(function() {
		$('#starterRow').hide();
		model.removeDishFromMenu(view.starter);
	});

	// Handles the remove main button
	$('#removeMainButton').click(function() {
		$('#mainRow').hide();
		model.removeDishFromMenu(view.main);
	});

	// Handles the remove dessert button
	$('#removeDessertButton').click(function() {
		$('#dessertRow').hide();
		model.removeDishFromMenu(view.dessert);
	});
}