
angular.module('myApp')
    .controller("mealsCtrl", mealsCtrl);

function mealsCtrl($scope, $reactive){

    $reactive(this).attach($scope);

    this.title = "damnn Meals";
}

