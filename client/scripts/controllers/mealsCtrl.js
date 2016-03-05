
angular.module('myApp')
    .controller("mealsCtrl", mealsCtrl);

function mealsCtrl($scope, $reactive){

    $reactive(this).attach($scope);

    this.titless = "My mealss damn it"

    $scope.meals = [
        {
            id: 0,
            restaurant: "Coyo",
            picture: "images/coyo-taco.jpg"
        },
        {
            id: 1,
            restaurant: "Mc Donald's",
            picture: "images/mc.jpg"
        },
        {
            id: 2,
            restaurant: "Pollo Tropical",
            picture: "images/pt.jpg"
        },
        {
            id: 3,
            restaurant: "Wendy's",
            picture: "images/ws.jpg"
        }
    ];
}

