angular.module('openidmApp.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
})


.controller('UserListCtrl', ['$scope', 'User', function ($scope, User) {

    User.getAll().success(function (data) {
        $scope.items = data.results;
    });

    $scope.onItemDelete = function (item) {
        User.delete(item.objectId);
        $scope.items.splice($scope.items.indexOf(item), 1);
    }

}])

.controller('UserCreationCtrl', ['$scope', 'User', '$state', function ($scope, User, $state) {

    $scope.user = {};

    $scope.create = function () {
        User.create({
            username: $scope.user.username
        }).success(function (data) {
            $state.go('app.user');
        });
    }


}])

.controller('UserEditCtrl', ['$scope', 'User', '$state', '$stateParams', function ($scope, User, $state, $stateParams) {

    $scope.user = {
        id: $stateParams.id,
        username: $stateParams.username
    };

    $scope.edit = function () {
        User.edit($scope.user.id, {
            username: $scope.user.username
        }).success(function (data) {
            $state.go('app.user');
        });
    }

}]);
