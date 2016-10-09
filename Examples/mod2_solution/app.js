(function(){
  'ue strict';

  angular.module('ShoppingListCheckOff', [])
         .controller('ToBuyShoppingController', ToBuyShoppingController)
         .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject= ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService)
  {
    var ItemsToBuy = this;
    ItemsToBuy.BuyItem = function(index)
    {
        ShoppingListCheckOffService.BuyItem(index);
    }
    ItemsToBuy.ShoppingListEmpty = function()
    {
      return ShoppingListCheckOffService.ItemsToBuyCount() <= 0;
    }
    ItemsToBuy.ShoppingList = function()
    {
      return ShoppingListCheckOffService.ItemsToBuy;
    }
  };

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService)
  {
    var ItemsBought = this;
    ItemsBought.PurchasedItemsEmpty= function()
    {
      return ShoppingListCheckOffService.ItemsBoughtCount() <= 0;
    }
    ItemsBought.PurchasedList = function()
    {
      return ShoppingListCheckOffService.ItemsBought;
    }
  }

  function ShoppingListCheckOffService()
  {
    var service = this;
    service.ItemsBought = [];
    service.ItemsToBuy  = [
      { name: "milk",     quantity: 2 },
      { name: "cake",    quantity: 8 },
      { name: "bread",        quantity: 5 },
      { name: "hamburguer", quantity: 4 },
      { name: "water",     quantity: 10 },
    ];
    service.BuyItem = function(index)
    {
      service.ItemsBought.push(service.ItemsToBuy[index]);
      service.ItemsToBuy.splice(index, 1);
    }
    service.ItemsToBuyCount = function()
    {
      return service.ItemsToBuy.length;
    }
    service.ItemsBoughtCount = function()
    {
      return service.ItemsBought.length;
    }
  }
})();
