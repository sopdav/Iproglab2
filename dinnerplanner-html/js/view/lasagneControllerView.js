var lasagneControllerView = function(view,model){

	view.backToSelectDish.click(function(){
		$('#lasagneView').hide();
		$('#selectDishView').show();
		$('#mainbar').show();
	});

	view.confirmDishButton.click(function(){
			$('#lasagneView').hide();
			$('#selectDishView').show();
			$('#mainbar').show();

			model.addDishToMenu(view.dish.id);

			if(view.dish.type == 'starter'){
				$('#starterRow').show();
				$('#starterItem').text(view.dish.name);
				$('#starterItemCost').text(model.getDishCost(view.dish));

			}

			if(view.dish.type == 'main dish'){
				$('#mainRow').show();
				$('#mainItem').text(view.dish.name);
				$('#mainItemCost').text(model.getDishCost(view.dish));

			}

			if(view.dish.type == 'dessert'){
				$('#dessertRow').show();
				$('#dessertItem').text(view.dish.name);
				$('#dessertItemCost').text(model.getDishCost(view.dish));

			}

	});
}