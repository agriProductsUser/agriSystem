angular.module('agri').controller('contactController',function ($scope,contactService) {

    $scope.submit =function (object) {

        contactService.saveContacts(object).then(
            function (res) {
                if (res){
                    console.log("success");
                }
                else {
                    console.log("Failed");
                }

            }
        )

    }

});

