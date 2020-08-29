angular.module('agri').controller('orderController',function ($scope,orderService) {

    $scope.submit=function(obj){
        orderService.saveOrder(obj).then(
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