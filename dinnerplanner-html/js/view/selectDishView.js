var SelectDishView = function (container, model){
	// Here we load the dishes
	this.starter = container.find("#starters");
	this.main = container.find("mains");
	this.dessert = container.find("desserts");

	var listOfSessions = "";

	for (var j = 0; j < model.getAllDishes("starter").length; j++) {
			listOfSessions += '<li id=thelist style="display:inline-block; width: 200px; height:200px;">' + 
			'<div id=' 
				+ model.getAllDishes("starter")[j].id 
				+ '>' 
				+ '<img style="width: 150px; height: 150px;" src="' 
					+ 'images/' 
					+ model.getAllDishes("starter")[j].image 
					+ '" alt ="' 
					+ model.getAllDishes("starter")[j].image 
					+ '">' 
				+ '<br>' 
				+ model.getAllDishes("starter")[j].name 
			+ '</div>';

		document.getElementById("starters").innerHTML = listOfSessions;
		listOfSessions = "";
		};
}