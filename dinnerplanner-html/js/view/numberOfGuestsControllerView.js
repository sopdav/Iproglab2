var NumberOfGuestsControllerView = function(view, model) {
	view.editButton.click(function() {
		$('#mainbar').show();				// searchbar
		$('#sidebarView').show();			// sidebar
		$('#lasagneView').hide();			// dishdescription
		$('#selectDishView').show();		// selectdish
		$('#numberOfGuestsView').hide();	// numberofguests
		$('totalCostView').hide();			// summary
		$('finalView').hide();				// instructionsView
	});
}