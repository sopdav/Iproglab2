var TotalCostView = function(container, model) {
	// Get the wanted elements, the ones that have changed due to the interaction
	this.starter = container.find("#starter");
	this.main = container.find("#main");
	this.dessert = container.find("#dessert");

	this.starterName = container.find("#starterName");
	this.mainName = container.find("#mainName");
	this.dessertName = container.find("#dessertName");

	this.starterCost = container.find("#starterCost");
	this.mainCost = container.find("#mainCost");
	this.dessertCost = container.find("#dessertCost");

	this.totalCost = container.find("#totalCost");
	this.printRecipeButton = container.find("#printRecipeButton");


	// Called function when something changes in the model

	this.update = function(object) {

		for (var i = 0; i < model.getFullMenu().length; i++) {
			var dish = model.getFullMenu()[i];
			alert("totalCost");


			if (dish.type == 'starter') {
				this.starter.attr('src', 'images/' +dish.image);
				this.starterName.html(dish.name);
				this.starterCost.html(model.getDishCost(dish) + ' SEK');
			};

			if (dish.type == 'main dish') {
				this.main.attr('src', 'images/' +dish.image);
				this.mainName.html(dish.name);
				this.mainCost.html(model.getDishCost(dish) + ' SEK');
			};

			if (dish.type == 'dessert') {
				this.dessert.attr('src', 'images/' +dish.image);
				this.dessertName.html(dish.name);
				this.dessertCost.html(model.getDishCost(dish) + ' SEK');
			};
		};
	this.totalCost.html(model.getTotalMenuPrice());
	}

	/*****

		The observer part

		We register an observer and then set the initial values

	*****/

	model.addObserver(this);
	

	this.update();
}