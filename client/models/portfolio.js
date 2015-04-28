'use strict';

angular.module('eTrade')
.factory('Portfolio', function($firebaseObject, $rootScope){

  var fbPortfolio;
  var afPortfolio;

  function Portfolio(){

  }

  Portfolio.init = function(){
    fbPortfolio = $rootScope.fbRoot.child('user/' + $rootScope.displayName);
    afPortfolio = $firebaseObject(fbPortfolio);
    return afPortfolio;
  };

  Portfolio.add = function(portfolio){
    var namesArray = afPortfolio.names ? afPortfolio.names.split(',') : [];
    console.log(namesArray);
    namesArray.push(portfolio);
    namesArray = namesArray.join(',');
    afPortfolio.names = namesArray;
    afPortfolio.$save();
  };

  return Portfolio;
});
