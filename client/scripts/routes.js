angular
    .module('myApp')
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'client/templates/tabs.html'
        })

        .state('tab.map', {
            url: '/map',
            views: {
                'tab-map': {
                    templateUrl: 'client/templates/map.html',
                    controller: 'mapCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('tab/map');
}