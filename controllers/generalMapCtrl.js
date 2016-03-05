if (Meteor.isClient) {
    (function(){
        angular.module('myApp')
            .controller("generalMapCtrl", generalMapCtrl);

        function generalMapCtrl($scope){
            $scope.test = "my second Test";
        }
    })();
}
