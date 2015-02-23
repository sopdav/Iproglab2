var lasagneView = function (container, model){
	//get all of the elements from the html id's

	this.numberOfGuests = container.find("#numberOfGuests");
	this.backToSelectedDish = container.find("#backToSelectDish");
	this.confirmDishButton = container.find("#confimDishButton");
	this.dishName = container.find("#dishName");
	this.dishPrep = container.find("#dishPrep");
	this.dishImg = conatainer.find("#dishImg");

	model.addObserver(this);

	this.update=function(){
		this.dish = model.getDish(model.getClickDishId());
		this.dishName.html(this.dish.name);

		this.dishImg.attr('src', 'images/' + this.dish.image);
		this.dishPrep.html(this.dish.description);


			var ingredientslist = "";
			var pricecounter = 0;

			for(var x = 0; x < this.dish.ingredients.length; x++){

				ingredientslist+= '<span style="padding:10px;">'
				+this.dish.ingredients[x].name + '</span><span style="padding:10px;">'
				+this.dish.ingredients[x].quantity
				+this.dish.ingredients[x].unit + '</span><span style="padding:10px;">'
				+ 'SEK' + this.dish.ingredients[x].price + '</span><br>';

				pricecounter+= this.dish.ingredients[x].price;
			}

			document.getElementById("ingredientslist").innerHTML = ingredientslist;
			document.getElementById("pricecounter").innerHTML = 'Total cost: SEK' + pricecounter*model.getNumberOfGuests();
			this.numberOfGuests.html(model.getNumberOfGuests());

	}

	this.update();

}