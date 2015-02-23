var SelectDishView = function (container, model){
	// Here we load the dishes
	this.starter = container.find("#starters");
	this.main = container.find("#mains");
	this.dessert = container.find("#desserts");

	var listOfSessions = "";

	// gets all the starter dishes with their picture and namne, li creates a list (bulleted?)
	for (var j = 0; j < model.getAllDishes("starter").length; j++) {
			listOfSessions += '<li id=list style="display:inline-block;width:200px;height:200px;">' + '<div id=' + model.getAllDishes("starter")[j].id + '>' + '<img style="width:150px;height:150px;" src="' + 'images/' + model.getAllDishes("starter")[j].image + '" alt ="' + model.getAllDishes("starter")[j].image + 
			'">' + '<br>' + model.getAllDishes("starter")[j].name + '</div>';
			listOfSessions += '</li>';
		}
		document.getElementById("starters").innerHTML = listOfSessions;
		listOfSessions = "";

	// gets all the main course dishes with their picture and name
	for (var j = 0; j < model.getAllDishes("main dish").length; j++) {
			listOfSessions += '<li id=list style="display:inline-block;width:200px;height:200px;">' + '<div id=' + model.getAllDishes("main dish")[j].id + '>' + '<img style="width:150px;height:150px;" src="' + 'images/' + model.getAllDishes("main dish")[j].image + '" alt ="' + model.getAllDishes("main dish")[j].image + 
			'">' + '<br>' + model.getAllDishes("main dish")[j].name + '</div>';
			listOfSessions += '<br><br></li>';	// adds to the current list
		}
		document.getElementById("mains").innerHTML = listOfSessions;
		listOfSessions = "";

	// gets all the dessert dishes with their picture and name
	for (var j = 0; j < model.getAllDishes("dessert").length; j++) {
		listOfSessions += '<li id=list style="display:inline-block;width:200px;height:200px;">' + '<div id=' + model.getAllDishes("dessert")[j].id + '>' + '<img style="width:150px;height:150px;" src="' + 'images/' + model.getAllDishes("dessert")[j].image + '" alt ="' + model.getAllDishes("dessert")[j].image + 
			'">' + '<br>' + model.getAllDishes("dessert")[j].name + '</div>';
			listOfSessions += '<br><br></li>';	// adds to the current list
		}
		document.getElementById("desserts").innerHTML = listOfSessions;
		listOfSessions = "";

	// Create the function to search in the main bar

//	var searchList = [];

	// gets the variables from searchList if they are in searchDish
//	$('#searchDish').typeahead( {
//		local: searchList
//	});

	// keyup handles what is pressed on the keyboard
//	$('#searchDish').keyup(function() {
//		var userInput = $(this).val();
//		$('#selectDishView', li).map(function(index, value) {
//			$(value).toggle($(value).text().toLowerCase().indexOf(userInput) >= 0); // shows the chosen dish
//		});
//	});
}

