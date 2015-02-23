var SelectDishControllerView = function(view, model) {
	$(document).on("change", "#option", function() {
		var chosen = this.value;

		// shows only starters
		if (chosen == "Starters") { // looks over in the html-code to find the value
			$('#starters').show();
			$('#mains').hide();
			$('#desserts').hide();
		};
		// shows only main courses
		else if (chosen == "Main course") {
			$('#starters').hide();
			$('#mains').show();
			$('desserts').hide();
		};
		// shows only desserts
		else if (chosen == "Desserts") {
			$('#starters').hide();
			$('#mains').hide();
			$('#desserts').show();
		};
		// shows all courses
		else (chosen == "All") {
			$('#starters').show();
			$('#mains').show();
			$('#desserts').show();
		}
	});

	// INSERT CODE HERE
}