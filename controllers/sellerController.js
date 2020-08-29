angular.module('agri').controller('sellerController',function ($scope,sellerService) {

    $scope.submit=function(obj){
        sellerService.saveSeller(obj).then(
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