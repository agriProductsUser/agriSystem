angular.module('agri').controller('rateController',function ($scope,rateService) {

    $scope.submit=function(obj){
        rateService.saveRate(obj).then(
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