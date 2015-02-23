var TotalCostControllerView = function(view, model) {

	view.printFullRecipeButton.click(function() {
		$('#totalCostView').hide();
		$('#lasagneView').hide();
		$('#finalView').show();
	});
}