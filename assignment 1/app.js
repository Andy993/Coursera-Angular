( function()
{
    'use strict'

    angular.module('assignment1',[])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.message = "";
     
    
        $scope.check = function(){
            
            if(!$scope.name){
                $scope.message = "Please enter data first";
            }
            else{
                var food1 = $scope.name.replace(/\s/g, "").split(',');

                var food = food1.filter(item => item);
                if(food.length == 0)
                {
                    $scope.message = "Please enter data first";
                }
                else if (food.length <= 3 ){
                    $scope.message = "Enjoy!";
                }
                 else {
                    $scope.message = "Too much!";
                }
                
            }



            

           

        }


    }

   
}
)();