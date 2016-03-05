angular
    .module('myApp')
    .controller('mapCtrl', mapCtrl);

function mapCtrl ($scope) {
    $scope.test= "Angular works"


    console.log(Geolocation.latLng());

}

