// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('openidmApp', ['ionic', 'openidmApp.controllers', 'openidmApp.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.search', {
        url: "/search",
        views: {
            'menuContent': {
                templateUrl: "templates/search.html"
            }
        }
    })


    .state('app.user', {
        url: '/user',
        views: {
            'menuContent': {
                templateUrl: "templates/user.html",
                controller: 'UserListCtrl'
            }
        },
        cache: false
    })

    .state('app.createUser', {
        url: '/user/new',
        views: {
            'menuContent': {
                templateUrl: "templates/create-user.html",
                controller: 'UserCreationCtrl'
            }
        }
    })

    .state('app.editUser', {
        url: '/user/edit/:id/:username',
        views: {
            'menuContent': {
                templateUrl: "templates/edit-user.html",
                controller: 'UserEditCtrl'
            }
        }
    });

    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/user');
});
