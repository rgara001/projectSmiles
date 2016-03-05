if (Meteor.isClient) {
    (function(){
        angular.module('myApp')
            .controller("scanMealsCtrl", scanMealsCtrl);

        function scanMealsCtrl($scope){
            $scope.title = "Scan Meals";
        }
    })();
}
