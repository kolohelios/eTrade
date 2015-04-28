'use strict';

angular.module('eTrade')
.controller('PortfoliosNewCtrl', function($scope, Portfolio, $state){

  Portfolio.init();

  $scope.createNewPortfolio = function(portfolio){
    Portfolio.add(portfolio);
    $state.go('portfolios.list');
  };
});
