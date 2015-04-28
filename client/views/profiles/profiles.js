'use strict';

angular.module('eTrade')
.controller('ProfilesCtrl', function($scope, Profile){

  $scope.profile = Profile.init();

  $scope.profile.$loaded().then(function(){
    $scope.addressArray = $scope.profile.address.split('\n');
  });


  $scope.updateProfile = function(){
    Profile.save();
  };

});
