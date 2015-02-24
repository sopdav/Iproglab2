var TotalCostControllerView = function(view, model) {

	$('#printRecipeButton').click(function() {
		$('#totalCostView').hide();
		$('#lasagneView').hide();
		$('#finalView').show();
	});
}