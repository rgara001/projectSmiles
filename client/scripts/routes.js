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
        })
        .state('tab.meals', {
            url: '/meals',
            views: {
                'tab-meals': {
                    templateUrl: 'client/templates/meals.html',
                    controller: 'mealsCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('tab/map');
}