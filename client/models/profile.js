'use strict';

angular.module('eTrade')
.factory('Profile', function($firebaseObject, $rootScope){

  var fbProfile;
  var afProfile;

  function Profile(){

  }

  Profile.init = function(){
    fbProfile = $rootScope.fbRoot.child('user/' + $rootScope.displayName + '/profile/');
    afProfile = $firebaseObject(fbProfile);
    return afProfile;
  };

  Profile.save = function(){
    return afProfile.$save();
  };

  return Profile;

});
