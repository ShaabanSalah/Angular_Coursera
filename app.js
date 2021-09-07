(function(){
'use strict';
angular.module('myFirstAssignment',[])

.controller('assignmentControler',function($scope){
	$scope.itemsForLunch="";
	$scope.message="";
	$scope.showMessage = false;
	$scope.totalItemsCount =0;

	$scope.checkLunchMeals=function()
	{
		var mealsList = $scope.itemsForLunch.split(',');//split the meals into array

		$scope.totalItemsCount = checkItemCount(mealsList);//get count without empty itms

		if($scope.totalItemsCount==0)//check for empty entry
		{
			$scope.message="Please enter data first";
			$scope.messageColor = "blue";
		}
		else if ($scope.totalItemsCount <=3) {//case if the meals count less than 4
				$scope.message="Enjoy!";
				$scope.messageColor = "green";
		}
		else { //case if the meals count more than 4
					$scope.message="Too much!";
					$scope.messageColor = "red";
		}

		$scope.showMessage = true;
	}

//this function to remove empty items, and return the correct itms count
	function checkItemCount(itemsList)
	{
		var itemsCount=0;
		for (var i = 0; i < itemsList.length; i ++) {
			 if (itemsList[i].trim() != '') {
					 itemsCount++;
			 }
		 }
			 return itemsCount;
	}

});

})();
