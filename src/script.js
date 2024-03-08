var viewModel = {
	data: {
		currentShoeOption: ko.observable({
		    	"shoeColor": "Color Blanco con Negro",
				"RRP": "$70.000",
				"discountPrice": "$49.990",
			    "className": "cpc-product-black",
			    "rating": 90,
			    "inputID": "rad4",
				"shoeImage": "https://i.imgur.com/bV5zcmi.png"
			}) // Passing this first line in to set as a default value
	},
};
ko.applyBindings(viewModel);

