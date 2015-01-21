var app = angular.module('BunniesApp', []);

var controller = app.controller('MainController', function ($scope, $http) {
  $scope.bunnies = []
  $http.get('http://mcakes.local:4000/json/bunnies', {
    headers: {
      'X-Token': 'please'
    }
  }).then(function(resp) {
    console.log('resp ', resp);
    $scope.bunnies = resp.data
  }, function (err) {
    console.log('err ', err);
  })
})
