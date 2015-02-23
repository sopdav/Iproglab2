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
		for (var i = 0; i < model.getFullMenu.length; i++) {
			var dish = model.getFullMenu()[i];

			if (dish.type == 'starter') {
				this.starter.attr('scr' + 'images/' + dish.image);
			};
		};
	}
}