angular
    .module('myApp')
    .controller('mapCtrl', mapCtrl);

function mapCtrl ($scope, $meteor) {

    $scope.test= "Angular works"


    console.log(Geolocation.latLng());

}

