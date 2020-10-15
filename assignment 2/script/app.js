(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
var Buy = this;

Buy.ToBuy = ShoppingListCheckOffService.getList();

Buy.purchased = function(itemIndex){
    ShoppingListCheckOffService.purchased(itemIndex);
    Buy.status = ShoppingListCheckOffService.statusCheck();
}


};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

var bought = this;


bought.Bought = ShoppingListCheckOffService.getBought();
bought.errormsg = ShoppingListCheckOffService.errormsg();


};

function ShoppingListCheckOffService()
{
    var service = this;

    
    var ToBuy = [
        {item_quantity : 1 , item_name : 'cookies'} ,
        {item_quantity : 2, item_name : 'chips'} ,
        {item_quantity : 3, item_name : 'biscuits'} ,
        {item_quantity : 4, item_name : 'waffers'} ,
        {item_quantity : 5, item_name : 'candies'} 
    ];

    var Bought = [];

    service.getList = function()
    {
        return ToBuy;
    };

    service.purchased = function(itemIndex) {
        // console.log(ToBuy.splice(itemIndex,1));
        var temp = ToBuy.splice(itemIndex,1);
        // Bought.push(temp);
        service.addItem(temp[0].item_quantity,temp[0].item_name);
        // console.log(temp[0]);
        // console.log(ToBuy);
        // console.log(Bought[0]);

    };

    service.statusCheck =  function(){
        if(ToBuy.length<1){
            var status = true;   
        }
        else{
            var status = false;
        }
        return status;
        
    }

    service.getBought = function(){
        return Bought;
    }

    service.addItem = function(quantity,name){
        var item = {
            item_quantity: quantity,
            item_name: name
          };

          Bought.push(item);
    }

    // service.checkBought = function()
    // {
    //     console.log(Bought.length);
    //     if(Bought.length<1){
    //         var status = true;
    //         status.errmsg = "Nothing bought yet.";
    //     }
    //     else{
    //         var status = false;
    //     }

    //     return status;
    // }

    service.errormsg = function()
    {
        console.log(Bought.length);
        if(Bought.length<1){
            var errmsg = "Nothing bought yet.";
        }
        else{
            var errmsg = false;
        }

        return errmsg;

    }



};




})();