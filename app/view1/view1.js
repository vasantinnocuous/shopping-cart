
'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {

 $scope.productsSet = 
	{
		products: [
		{
			productname:"Complete Solution",
			cost: 10,
			qty:1,
			description:{
				superImpFeatures:[
				"smartfrog app",
				"smartfrog HD cam",
				"24 hour recording"
				],
				impFeatures:[
				"Important Feature 1",
				"Important Feature 2",
				"Important Feature 3"
				],
				norFeatures: [
				"Normal Feature 1",
				"Normal Feature 2",
				"Normal Feature 3",
				"Normal Feature 4"
				]
			}
		},
		{
			productname:"Cam Package",
			cost: 10,
			qty:1,
			description:{
				superImpFeatures:[
				"super Imp Feature 1",
				"super Imp Feature 2",
				"super Imp Feature 3"
				],
				impFeatures:[
				"Important Feature 21",
				"Important Feature 22",
				"Important Feature 23"
				],
				norFeatures: [
				"Normal Feature 21",
				"Normal Feature 22",
				"Normal Feature 23",
				"Normal Feature 24"
				]
			}
		},
		{
			productname:"Smart Sol",
			cost: 10,
			qty:1,
			description:{
				superImpFeatures:[
				"super Imp Feature 1",
				"super Imp Feature 2",
				"super Imp Feature 3"
				],
				impFeatures:[
				"Important Feature 31",
				"Important Feature 32",
				"Important Feature 33"
				],
				norFeatures: [
				"Normal Feature 31"
				]
			}
		},
		{
			productname:"Frog Solution",
			cost: 100,
			qty:1,
			description:{
				superImpFeatures:[
				"Scans for bugs",
				"360 degree cam rotation",
				"water proof..."
				],
				impFeatures:[
				"There are over 5000 species of smartfrogs",
				"SmartFrogs don’t need to drink water as they absorb it through their skin.",
				"A Smartfrog’s call(communitation protocol) is unique to its species(product type), and some Smartfrog's calls can be heard up to a mile away.",
				"In Egypt the frog is the symbol of life and fertility, and in Egyptian mythology Heget is a frog-goddess who represents fertility.(ur very welcome ;-))"
				],
				norFeatures: [
				"Some frogs can jump over 20 times their own body length; that is like a you jumping 30m.",
				"Many species of frog care for their offspring.",
				"Females of some frog species keep a regular check on their offspring (tadpoles) and if food becomes scarce she will deposit unfertilised eggs for them to eat.",
				,
				"Since Pictish times, the (smart)frogs has been considered lucky in Scotland. This is why stone frogs are commonly kept in gardens and often given as housewarming gifts.",
				"these are excellent biological indicators of the wider health of ecosystems.",
				"Asian tree frogs build nests in trees above water so that when the tadpoles hatch they fall directly into the water."
				]
			}
		}
		]
	};
 
$scope.addToCart = function(item){
	if (!$scope.cart.items.contains(item)) {
		$scope.cart.items.push(item)
	}
	console.log($scope.cart.items);
	
}

 $scope.cart = {
        items: []
    };

    Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

    $scope.removeItem = function(index) {
        $scope.cart.items.splice(index, 1);
    }

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.cart.items, function(item) {
            total += item.qty * item.cost;
        })

        return total;
    }

    $scope.addQty = function(item){
    	item.qty ++;
    }
    $scope.removeQty = function(item){
    	item.qty --;
    	if (item.qty <= 0)
    		item.qty = 1;
    }
}]);