(function () {
  'use strict';

  angular.module('public')
    .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['UserInfoService', 'ApiPath'];
  function UserInfoController (UserInfoService, ApiPath) {
    this.info = UserInfoService.getUserInfo();
    this.basePath = ApiPath;
  }
})();