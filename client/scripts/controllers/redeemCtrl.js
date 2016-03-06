
angular.module('myApp')
    .controller("redeemCtrl", redeemCtrl);

function redeemCtrl($scope, $reactive, $location, $ionicNavBarDelegate){

    $ionicNavBarDelegate.showBackButton(true);


    $reactive(this).attach($scope);

    $scope.title = "Reedem"

}

