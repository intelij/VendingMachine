function InitVendor() {
	
	var Money = {
	  TWO_POUND : {name : "Two Pound", value : 2.00},
	  POUND : {name : "Pound", value : 1.00},
	  HALF_POUND : {name : "Half Pound", value : 0.50},
	  TWENTY : {name : "Twenty", value : 0.20},
	  TEN : {name : "Ten", value : 0.10},
	  FIVE : {name : "Five", value : 0.05},
	  TWO : {name : "Two", value : 0.02},
	  PENNY : {name : "Penny", value : 0.01}
	}
	
	var Product = {
	  CHIPS : {name : "Chips", cost : 0.75},
	  COKE : {name : "Coke", cost : 1.25},
	  CANDY : {name : "Candy", cost : 0.85}
	}
	
}

module.exports = InitVendor;
