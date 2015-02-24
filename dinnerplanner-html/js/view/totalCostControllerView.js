var TotalCostControllerView = function(view, model) {

	$( "#printRecipeButton" ).click(function() {
		alert("message");
		$('#totalCostView').hide();
		$('#lasagneView').hide();
		$('#finalView').show();
	});
}