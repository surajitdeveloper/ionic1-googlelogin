// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("myCtrl", function($scope, $state, $ionicLoading) {
  $scope.firstName = "Surajit";
  $scope.lastName = "Sadhukhan";
  $scope.googleSignIn = function() {
    $ionicLoading.show({
      template: 'Logging in...'
    });
    window.plugins.googleplus.login(
      {},
      function (user_data) {
        // For the purpose of this example I will store user data on local storage
        console.log("user data get");
        console.log(user_data);
        $ionicLoading.hide();
        //$state.go('app.home');
      },
      function (msg) {
        console.log("could not login");
        console.log(msg);
        $ionicLoading.hide();
      }
    );
  };
});
