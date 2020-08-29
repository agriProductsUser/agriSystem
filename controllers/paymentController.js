angular.module('agri').controller('paymentController',function ($scope,paymentService) {

    $scope.submit =function (dilini) {

        paymentService.savePayment(dilini).then(
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




    $scope.viewPayment=function () {
        paymentService.viewPay().then(
            function (response) {
                $scope.payment = response;
        })

    }



});

