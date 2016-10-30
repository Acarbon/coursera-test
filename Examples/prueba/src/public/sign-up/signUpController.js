(function () {
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$http', 'ApiPath', 'UserInfoService'];
  function SignUpController($http, ApiPath, UserInfoService) {
    var suctrl = this;
    suctrl.firstName = '';
    suctrl.lastName = '';
    suctrl.email = '';
    suctrl.phone = '';
    suctrl.favorite = '';
    suctrl.noSuchMenuNumberMessage = false;
    suctrl.savedInfoMessage = false;

    suctrl.signUp = function () {
      if(suctrl.favorite) {
        $http({
          method: 'GET',
          url: (ApiPath + '/menu_items/' + suctrl.favorite + '.json')
        }).then(function (response) {
          UserInfoService.setUserInfo({
            firstName: suctrl.firstName,
            lastName: suctrl.lastName,
            email: suctrl.email,
            favorite: response.data,
            phone: suctrl.phone
          });
          suctrl.savedInfoMessage = true;
          suctrl.noSuchMenuNumberMessage = false;
        }).catch(function (error) {
          console.log('error detected');
          suctrl.noSuchMenuNumberMessage = true;
        })
      }

      else
        this.noSuchMenuNumberMessage = true;
    }
  }
})();