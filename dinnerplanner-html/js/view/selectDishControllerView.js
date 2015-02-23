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

	// Goes through the list called "thelist" in selectDishView
	for (var i = 0; i < $('#thelist div').length; i++) {
		var current = $('#thelist div')[i];
		current.onclick = function() {
			$('#selectDishView').hide();
			$('#mainbar').hide();
			$('#lasagneView').show();
			model.setClickDishId(this.id);
		}
	};
}