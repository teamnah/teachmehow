

angular.module('teachMe',[ 'app.dash','app.prof', 'app.request','app.splash','app.helpers','ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/splash');

    $stateProvider
        .state('splash',{
            url: '/splash',
            templateUrl: 'app/components/splash/splash.html',
            controller: 'SplashCtrl as vm'
        })
        .state('dash',{
            url: '/dash',
            templateUrl: 'app/components/dash/dash.html',
            controller: 'DashCtrl as vm'
        })
        .state('prof',{
            url: '/prof',
            templateUrl: 'app/components/prof/prof.html',
            controller: 'ProfCtrl as vm'
        })
        .state('request',{
            url: '/request',
            templateUrl: 'app/components/request/request.html',
            controller: 'RequestCtrl as vm'
        })
       
})