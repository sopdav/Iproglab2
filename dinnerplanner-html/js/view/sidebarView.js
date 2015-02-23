var SidebarView = function(container, model) {

	// Get the needed elements from the html-file

	this.numberOfGuests = container.find("#numberOfGuests");
	this.editGuestNumber = container.find("#editGuestNumber");
	this.div = container.find("#selectDishView");
	this.confirmButton = container.find("#confirmButton");
	this.starterItem = container.find("#starterItem");
	this.starterItemCost = container.find("#starterItemCost");
	this.mainItem = container.find("#mainItem");
	this.mainItemCost = container.find("#mainItemCost");
	this.dessertItem = container.find("#dessertItem");
	this.dessertItemCost = container.find("#dessertItemCost");
	this.totalCost = container.find("#totalCost");

	// The initial values are set here
	this.numberOfGuests.html(model.getNumberOfGuests());

	/*****
		Now over to the observer part.

		First we add an observer to the model
		Then we create a function that is called when something is 
		changed in the model
	
	*****/

	model.addObserver(this);

	this.update = function(object) {
		// guests and cost
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.totalCost.html(model.getTotalMenuPrice());

		// the courses
		this.starter = model.getSelectedDish('starter');
		this.main = model.getSelectedDish('main dish');
		this.dessert = model.getSelectedDish('dessert');

		// now we'd like to update the courses
		this.starterItem.html(model.getSelectedDish('starter'));
		this.mainItem.html(model.getSelectedDish('main dish'));
		this.dessertItem.html(model.getSelectedDish('dessert'));
	}

	this.update();

}