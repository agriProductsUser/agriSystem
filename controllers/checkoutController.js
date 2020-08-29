angular.module('agri').controller('checkoutController',function ($scope,checkoutService) {

    $scope.submit =function (object) {

        checkoutService.saveCheckout(object).then(
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