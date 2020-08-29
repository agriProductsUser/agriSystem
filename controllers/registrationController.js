angular.module('agri').controller('registrationController',function ($scope,registrationService) {

    $scope.submit=function(obj){
        registrationService.saveCustomer(obj).then(
            function (res) {
                if (res){
                    console.log("success");
                }
                else{
                    console.log("Fail");
                }
            }
        )
    }

})