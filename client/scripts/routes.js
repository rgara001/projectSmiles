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
        })
        .state('tab.meal', {
            url: '/meals/:mealId',
            views: {
                'tab-meals': {
                    templateUrl: 'client/templates/redeem.html',
                    controller: 'redeemCtrl'
                }
            }
        })
        .state('tab.scan', {
            url: '/scan',
            views: {
                'tab-meals': {
                    templateUrl: 'client/templates/scan.html',
                    controller: 'scanCtrl'
                }
            }
        })
        .state('tab.work', {
            url: '/work',
            views: {
                'tab-work': {
                    templateUrl: 'client/templates/work.html',
                    controller: 'workCtrl'
                }
            }
        })
        .state('tab.green', {
            url: '/green',
            views: {
                'tab-green': {
                    templateUrl: 'client/templates/green.html',
                    controller: 'greenCtrl'
                }
            }
        })
        .state('tab.login', {
            url: '/login',
            views: {
                'tab-login': {
                    templateUrl: 'client/templates/login.html',
                    controller: 'loginCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('tab/map');
}