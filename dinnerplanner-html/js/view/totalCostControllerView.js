var TotalCostControllerView = function(view, model) {

	view.printRecipeButton.click(function() {
		$('#totalCostView').hide();
		$('#lasagneView').hide();
		$('#finalView').show();
	});


}