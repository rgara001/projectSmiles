
angular.module('myApp')
    .controller("mealsCtrl", mealsCtrl);

function mealsCtrl($scope, $ionicHistory, $ionicNavBarDelegate, $location, $meteor) {
    console.log($location.path());
    var previousView = $location.path();
    if( previousView == "/tab/meals"){
        $ionicHistory.clearHistory();
        $ionicNavBarDelegate.showBackButton(false);
    }

    $scope.helpers({
            meals: () => {
            return Meals.find({});
    }});

    console.dir($scope.helpers);

    $scope.tabOne = true;
    $scope.hideBackButton = true;

$scope.scanMeal = function(){
    $meteor.getPicture().then(function(data){
        $scope.imageData = data;
    });;

}


//$scope.meals = [
//    {
//        id: 0,
//        restaurant: "Coyo",
//        picture: "images/coyo-taco.jpg"
//    },
//    {
//        id: 1,
//        restaurant: "Mc Donald's",
//        picture: "images/mc.jpg"
//    },
//    {
//        id: 2,
//        restaurant: "Pollo Tropical",
//        picture: "images/pt.jpg"
//    },
//    {
//        id: 3,
//        restaurant: "Wendy's",
//        picture: "images/ws.jpg"
//    }
//];



}


