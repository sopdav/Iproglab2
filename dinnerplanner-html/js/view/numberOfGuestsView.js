var NumberOfGuestsView = function(container, model) {
	alert("numberOfGuests");
	// Get info from the elements of the view, the ones that have responded to the interaction, that is.
	this.numberOfGuests = container.find("#numberOfGuests");
	this.editButton = container.find("#editButton");

	// The components are created now we want to set values to them.
	this.numberOfGuests.html(model.getNumberOfGuests());

	/*****

		The observer info.

		First we register the user, as usual and then call the function when something is changed in the function.

	*****/

	model.addObserver(this);

	this.update = function(object) {
		this.numberOfGuests.html(model.getNumberOfGuests());
	}

	this.update();
}
