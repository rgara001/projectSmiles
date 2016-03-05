
angular.module('myApp')
    .controller("redeemCtrl", redeemCtrl);

function redeemCtrl($scope, $reactive, $location){

    $reactive(this).attach($scope);

    $scope.title = "Reedem"

}

