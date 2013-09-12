//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var VendingMachine = require('ui/common/VendingMachine');
	var venMachine = new VendingMachine();

	
	var self = Ti.UI.createView({layout: 'vertical', top: 10});
	var amountView = Ti.UI.createView({layout: 'horizontal', height: 80});
	self.add(amountView);
	
	var totalView = Ti.UI.createView({
		layout: 'horizontal',
		height: 80
	});
		
		
	self.add(totalView);
	
	
	var coinsView = Ti.UI.createView({
		layout: 'horizontal',
		height: 200,
		backgroundColor: 'red'
	});
	
	self.add(coinsView);
	
	var heading = Ti.UI.createLabel({
		color: '#000000',
		text: 'Insert coins',
		font: {fontSize: 24, fontWeight: 'bold'},
		left: 10
	});
	
	coinsView.add(heading);
	
	var onePence = Ti.UI.createButton({
		left: 10,
		top: 10,
		title: '£0.01'
	});
	coinsView.add(onePence);
	
	var twoPence = Ti.UI.createButton({
		left: 10,
		top: 10,
		title: '£0.02'
	});
	coinsView.add(twoPence);
	
	var fivePence = Ti.UI.createButton({
		left: 10,
		top: 10,
		title: '£0.05'
	});
	coinsView.add(fivePence);
	
	var tenPence = Ti.UI.createButton({
		left: 10,
		top: 10,
		title: '£0.10'
	});
	coinsView.add(tenPence);
	
	var twentyPence = Ti.UI.createButton({
		left: 10,
		top: 10,
		title: '£0.20'
	});
	coinsView.add(twentyPence);
	
	var fiftyPence = Ti.UI.createButton({
		left: 10,
		top: 10,
		title: '£0.50'
	});
	coinsView.add(fiftyPence);
	
	var onePound = Ti.UI.createButton({
		left: 10,
		top: 10,
		title: '£1.00'
	});
	coinsView.add(onePound);
	
	var twoPounds = Ti.UI.createButton({
		left: 10,
		top: 10,
		title: '£2.00'
	});
	coinsView.add(twoPounds);


	var amountLabel = Ti.UI.createLabel({
		color: '#000000',
		text: 'Amount:',
		left: 10,
		top: 10
	});
	
	amountView.add(amountLabel);
	
	var amountField = Ti.UI.createTextField({
		left: 10,
		keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION, // Ti.UI.KEYBOARD_NUMBER_PAD,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
		width: 200
	});
	
	amountView.add(amountField);
	
	var addButton = Ti.UI.createButton({
		left: 10,
		title: 'Set Item Purchase Price'
	});
	
	addButton.addEventListener('click', function(){
		total = parseFloat(amountField.value);
		totalLabel.text = 'Purchase X item for: £' + total.toFixed(2);
		
			var purchase = total.toFixed(2);
			var tendered = 200.50;
			

		var change = parseFloat(tendered.toFixed(2) - purchase);
		Ti.API.info("1. Your change is: " + change);
		var dollars = parseFloat(change / 100);
		 change = parseFloat(change - dollars * 100);
		 Ti.API.info("2. Your change is: " + change);
		var quarters = parseFloat(change / 25);
		 change = parseFloat(change - quarters * 25);
		 Ti.API.info("3. Your change is: " + change);
		var dimes = parseFloat(change / 10);
		 change = parseFloat(change - dimes * 10);
		 Ti.API.info("4. Your change is: " + change);
		var nickels = parseFloat(change / 5);
		 change = parseFloat(change - nickels * 5);
		 Ti.API.info("5. Your change is: " + change);
		var pennies = parseFloat(change / 1);
		 change = parseFloat(change - pennies);
		 Ti.API.info("6. Your change is: " + change);

		
		Ti.API.info("--------------------------------------------------------------------\n\r\n\r");
		
		
		Ti.API.info("The amount tendered was: " + tendered);
		Ti.API.info("The purchase amount was: " + purchase);
		Ti.API.info("Your change is: " + change);
		Ti.API.info("The number of dollars is: " + dollars);
		Ti.API.info("The number of quarters is: " + quarters); 
		Ti.API.info("The number of dimes is: " + dimes);
		Ti.API.info("The number of nickels is: " + nickels);
		Ti.API.info("The number of pennies is: " + pennies);
		
		Ti.API.info("---------------------------------XXXXXXXXXXX-----------------------------------\n\r\n\r");
		


	});
	
	amountView.add(addButton);
	
	var total = 0;
	var totalLabel = Ti.UI.createLabel({
		color: '#000000',
		text: 'Purchase X item for: £' + total.toFixed(2),
		left: 10
	});
	
	totalView.add(totalLabel);
	
	
	
	
	
	








	
	return self;
}

module.exports = FirstView;
