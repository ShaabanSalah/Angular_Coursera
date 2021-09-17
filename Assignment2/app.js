(function(){
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController )
.service('shopingListService', shopingListService )

 ToBuyController.$inject=['shopingListService'];
 function ToBuyController(shopingListService){
	 var toBuy = this;

	   toBuy.items = shopingListService.getToBuyItems();

     toBuy.removeItem = function(index)
     {
       shopingListService.boughtItem(index);
     }
 }


  AlreadyBoughtController.$inject=['shopingListService'];
  function AlreadyBoughtController(shopingListService){
 	 var bought = this;

	   bought.items = shopingListService.getBoughtItems();
  }



//service for shoping list
	function shopingListService()
	{
		var service= this;

		var toBuyItems=[{name:'Cookies',quantity:4},{name:'Chips',quantity:8},{name:'Sweet Donuts',quantity:2},{name:'Coca Cola',quantity:1},
		                    {name:'Sugare',quantity:3},{name:'Apple Juice',quantity:5}];

    var BoughtItems=[];

		service.getToBuyItems = function ()
		{
			return toBuyItems;
		}

		service.getBoughtItems = function ()
		{
			return BoughtItems;
		}

    service.boughtItem = function (index)
    {
      var item = toBuyItems[index];//get the item
      BoughtItems.push(item);//add the item into bought list
      toBuyItems.splice(index,1);//remove the item from original list
    }
	}

})();
