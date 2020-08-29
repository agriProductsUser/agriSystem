angular.module('agri').controller('discountController',function ($scope,discountService) {

    $scope.submit=function(obj){
        discountService.saveDiscount(obj).then(
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