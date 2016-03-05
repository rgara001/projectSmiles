if (Meteor.isClient) {
    (function(){
        angular.module('myApp')
            .controller("mealsCtrl", mealsCtrl);

        function mealsCtrl($scope){
            $scope.title = "Meals";
        }
    })();
}
