function MainController($scope) {
  $scope.contact = {
    name: 'Pedro',
    phone: '1234567890'
  }

  $scope.year = '2016';
}

angular
  .module('app')
  .controller('MainController', MainController);