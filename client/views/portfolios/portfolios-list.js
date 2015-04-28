'use strict';

angular.module('eTrade')
.controller('PortfoliosListCtrl', function(Portfolio, $scope){

  $scope.portfoliosObjects = Portfolio.init();

  $scope.portfoliosObjects.$loaded().then(function(){
    $scope.portfolios = $scope.portfoliosObjects.names.split(',');
  });
});
