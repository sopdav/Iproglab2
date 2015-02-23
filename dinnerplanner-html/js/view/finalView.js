var finalView = function (view, model){



	this.starterImg = container.find("#starterImg");
	this.starterName = container.find("#starterName");
	this.starterPrep = container.find("#starterPrep");
	this.starterIngredients = container.find("#starterIngredients");

	this.mainImg = container.find("#mainImg");
	this.mainName = container.find("#mainName");
	this.mainPrep = container.find("#mainPrep");
	this.mainIngredients = container.find("#mainIngredients");	

	this.dessertImg = container.find("#dessertImg");
	this.dessertName = container.find("#dessertName");
	this.dessertPrep = container.find("#dessertPrep");
	this.dessertIngredients = container.find("#dessertIngredients");


	this.update = function(object){
		for (var i = 0; i < model.getFullMenu().length; i++) {
			var dish = model.getFullMenu()[i];

				if(dish.type == 'starter'){

					this.starterImg.attr('src', 'images/' +dish.image);
					this.starterName.html(dish.name);
					this.starterPrep.html(dish.description);
					this.starterIngredients.html(model.getPrintIngredients(dish));
				}

				if(dish.type == 'main dish'){

					this.mainImg.attr('src', 'images/' +dish.image);
					this.mainName.html(dish.name);
					this.mainPrep.html(dish.description);
					this.mainIngredients.html(model.getPrintIngredients(dish));
				
				}
				if(dish.type == 'dessert'){

					this.dessertImg.attr('src', 'images/' +dish.image);
					this.dessertName.html(dish.name);
					this.dessertPrep.html(dish.description);
					this.dessertIngredients.html(model.getPrintIngredients(dish));
				}
			
		}

	}

	model.addObserver(this);

	this.update();



}