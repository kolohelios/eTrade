'use strict';

angular.module('eTrade')
.factory('Balance', function($firebaseObject, $rootScope){

  var fbBalance;
  var afBalance;

  function Balance(){

  }

  Balance.init = function(){
    fbBalance = $rootScope.fbRoot.child('user/' + $rootScope.displayName + '/balance/');
    afBalance = $firebaseObject(fbBalance);
    afBalance.$loaded().then(function(){
      if(afBalance.$value === null){
        afBalance.$value = 0;
        afBalance.$save();
      }
      $rootScope.balance = afBalance.$value;
    });
  };

  Balance.deposit = function(amount){
    afBalance.$value = parseFloat(amount) + afBalance.$value;
    return afBalance.$save();
  };

  return Balance;

});
