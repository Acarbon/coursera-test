(function () {
  'use strict';

  angular.module('public')
    .service('UserInfoService', UserInfoService);

  function UserInfoService() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.favorite = '';
    this.phone = '';

    this.setUserInfo = function (info) {
      this.firstName = info.firstName;
      this.lastName = info.lastName;
      this.email = info.email;
      this.favorite = info.favorite;
      this.phone = info.phone;
    }

    this.getUserInfo = function () {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        favorite: this.favorite,
        phone: this.phone
      };
    }
  }
})();