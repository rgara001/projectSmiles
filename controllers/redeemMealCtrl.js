if (Meteor.isClient) {
    (function(){
        angular.module('myApp')
            .controller("redeemMealCtrl", redeemMealCtrl);

        function redeemMealCtrl($scope){
            $scope.title = "Meals";
        }
    })();
}
