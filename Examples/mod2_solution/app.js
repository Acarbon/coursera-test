(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.provider('ShoppingList', ShoppingListProvider)
.config(Config);

Config.$inject = ['ShoppingListProvider'];
function Config(ShoppingListProvider) {
  ShoppingListProvider.defaults.minItems = 0;
}

ToBuyController.$inject = ['ShoppingList'];
function ToBuyController(ShoppingList) {
  var list1 = this;

  list1.items = ShoppingList.getItems();

  list1.itemName = "";
  list1.itemQuantity = "";


  list.boughtItem = function (itemIndex) {
  	ShoppingList.addItem(list1.itemName, list1.itemQuantity);
     try {
    ShoppingList.removeItem(itemIndex);
    } catch (error) {
      list1.errorMessage = error.message;
    }
  };
}

AlreadyBoughtController.$inject = ['ShoppingList'];
function AlreadyBoughtController(ShoppingList) {
  var list2 = this;

  list2.items = ShoppingList.getItems2();
}

// If not specified, minItems assumed unlimited
function ShoppingListService(minItems) {
  var service = this;

  // List of shopping items
  var items = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }];

   var items2 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Cookies",
    quantity: "300"
  }];


  service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items2.push(item);
      
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
    if ((minItems === undefined) ||
        (minItems !== undefined) && (items.length === minItems)) {
      throw new Error("Max items (" + minItems + ") reached.");
    }
  };

  service.getItems = function () {

    return items;
  };

  service.getItems2 = function () {
    return items2;
      if ((minItems === undefined) ||
        (minItems !== undefined) && (items2.length === minItems)) {
      throw new Error("Max items (" + minItems + ") reached.");
  };
}


function ShoppingListProvider() {
  var provider = this;

  provider.defaults = {
    minItems: 100
  };

  provider.$get = function () {
    var shoppingList = new ShoppingListService(provider.defaults.minItems);

    return shoppingList;
  };
}




})();



