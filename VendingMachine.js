function VendingMachine() {
 
  var InitVendor = require('ui/common/InitVendor');
  // var initVendor = new InitVendor();
  // initVendor.open();
		
  var display = 'INSERT COIN';
  var coinsAccepted = [Money.TWO_POUND, Money.POUND, Money.HALF_POUND, Money.TWENTY, Money.TEN, Money.FIVE, Money.TWO, Money.PENNY];
  var coinReturn = [];
  var coinsAdded = [];
  var amountInserted = 0;
  var cashArray = coinsAccepted.map(function(coin) {
    return {value : coin, count : 0};
  });

  var products = [Product.CHIPS, Product.COKE, Product.CANDY];
  var inventory = products.map(function() {
    return 0;
  });
  itemBin = [];


  function cash(coin) {
    var coinIndex = coinsAccepted.indexOf(coin);
    if (coinIndex > 0) {
      return cashArray[coinIndex].count;
    } else {
      return 0;
    }
  }

  function updateDisplay() {
    updateTotal();

    if (amountInserted > 0) {
      display = '£' + amountInserted.toFixed(2);
    } else {
      display = 'INSERT COIN';
    }
  };

  function updateTotal() {
    var total = 0;
    for (var i = 0; i < coinsAdded.length; i++) {
      total += coinsAdded[i].value;
    }

    amountInserted = total;

  };

  function insertCoin(coin) {
    var coinIndex = coinsAccepted.indexOf(coin)
    if (coinIndex > -1) {
      coinsAdded.push(coin);
      cashArray[coinIndex].count++;
    } else {
      coinReturn.push(coin);
    }

    updateDisplay();
  };

  function returnCoins() {
    coinReturn = coinsAdded;
    coinsAdded = [];
    updateDisplay();
  };

  function addInventory(product, number) {
    var idx = products.indexOf(product);
    if (idx > -1) {
      if (number == null || typeof number == 'undefined') {
        number = 1;
      }
      inventory[idx] = inventory[idx] + number;
    }
  };

  function getInventory(product) {
    var idx = products.indexOf(product);
    if (idx > -1) {
      return inventory[idx];
    } else {
      return 0;
    }

  };

  function purchaseProduct(product) {
    amountInserted = amountInserted - product.cost;
    coinsAdded = [];
  };

  function vend(product) {
    var idx = products.indexOf(product);
    if (idx > -1) {
      purchaseProduct(product);

      inventory[idx]--;

      itemBin.push(product);

      updateDisplay();
    }
  }
}

module.exports = VendingMachine;
