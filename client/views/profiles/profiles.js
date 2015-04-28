'use strict';

angular.module('eTrade')
.controller('ProfilesCtrl', function($scope, Profile, Balance){

  $scope.profile = Profile.init();
  Balance.init();

  console.log($scope.balance);

  $scope.profile.$loaded().then(updateAddressArray);

  $scope.updateProfile = function(){
    Profile.save();
    updateAddressArray();
  };

  $scope.makeDeposit = function(amount){
    Balance.deposit(amount);
    $scope.depositAmt = 0;
    Balance.init();
  };

  function updateAddressArray(){
    $scope.addressArray = $scope.profile.address.split('\n');
  }



});
