angular
    .module('myApp')
    .controller('mapCtrl', mapCtrl);

function mapCtrl ($scope, $reactive) {

    $reactive(this).attach($scope);

    $scope.test= "Angular works"


    console.log(Geolocation.latLng());

}

