var SelectDishView = function (container, model){
	// Here we load the dishes
	this.starter = container.find("#starters");
	this.main = container.find("mains");
	this.dessert = container.find("desserts");

	var listOfSessions = "";

	// gets all the starter dishes with their picture and namne, li creates a list (bulleted?)
	for (var j = 0; j < model.getAllDishes("starter").length; j++) {
			listOfSessions += '<li id=thelist style="display:inline-block; width: 200px; height:200px;">' + 
			'<div id=' 
				+ model.getAllDishes("starter")[j].id + '>' 
				+ '<img style="width: 150px; height: 150px;" src="' + 'images/' + model.getAllDishes("starter")[j].image 
				+ '" alt ="' + model.getAllDishes("starter")[j].image + '">' + '<br>' + model.getAllDishes("starter")[j].name 
			+ '</div>';
		};
		document.getElementById("starters").innerHTML = listOfSessions;
		listOfSessions = "";

	// gets all the main course dishes with their picture and namne
	for (var k = 0; k < model.getAllDishes("starter").length; k++) {
			listOfSessions += '<li id=thelist style="display:inline-block; width: 200px; height:200px;">' + 
			'<div id=' 
				+ model.getAllDishes("main")[k].id + '>' 
				+ '<img style="width: 150px; height: 150px;" src="' + 'images/' + model.getAllDishes("main")[k].image 
					+ '" alt ="' + model.getAllDishes("main")[k].image + '">' + '<br>' + model.getAllDishes("main")[k].name 
			+ '</div>';
			listOfSessions += '<br><br></li>'	// adds to the current list
		};
		document.getElementById("mains").innerHTML = listOfSessions;
		listOfSessions = "";

	// gets all the dessert dishes with their picture and namne
	for (var l = 0; l < model.getAllDishes("dessert").length; l++) {
			listOfSessions += '<li id=thelist style="display:inline-block; width: 200px; height:200px;">' + 
			'<div id=' 
				+ model.getAllDishes("dessert")[l].id + '>' 
				+ '<img style="width: 150px; height: 150px;" src="' + 'images/' + model.getAllDishes("dessert")[l].image 
				+ '" alt ="' + model.getAllDishes("dessert")[l].image + '">' + '<br>' + model.getAllDishes("dessert")[l].name 
			+ '</div>';
			listOfSessions += '<br><br></li>'	// adds to the current list
		};
		document.getElementById("desserts").innerHTML = listOfSessions;
		listOfSessions = "";

	// Create the function to search in the main bar

	var searchList = [];

	// gets the variables from searchList if they are in searchDish
	$('#searchDish').typeahead( {
		local: searchList;
	});

	// keyup handles what is pressed on the keyboard
	$('#searchDish').keyup(function( {
		var inputOfUser = $(this).val();
		$('#SelectDishView', li).map(function(index, value) {
			$(value).toggle($(value).text().toLowerCase().indexOf(inputOfUser) >= 0); // shows the chosen dish
		});
	}));
}

