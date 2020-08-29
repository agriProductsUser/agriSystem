angular.module('agri').controller('stockController',function ($scope,stockService) {

    $scope.submit=function(obj){
        stockService.saveStock(obj).then(
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