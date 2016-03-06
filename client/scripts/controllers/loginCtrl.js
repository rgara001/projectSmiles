
angular.module('myApp')
    .controller("loginCtrl", loginCtrl);

function loginCtrl($scope) {
    $scope.title = "Login";

    $scope.users =[
        {
            name:"alejandro",
            password: 123
        },
        {
            name:"raul",
            password: 123
        }

    ];



}

