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
    $scope.searchRate=function (value) {
        return rateService.viewRates(value).then(
            function (res) {
                return res;
            })
    }
    $scope.selectedValue =function (val) {
        $scope.rate=val;
        $scope.sub="Update";
        $scope.rateId=val.id;
    }

    $scope.clear = function () {
        $scope.rate={};
    }
    $scope.delete=function () {
        return rateService.deleteRate($scope.rateId).then(
            function (response) {
                if(response==true){
                    console.log("Deleted successful");
                }else {
                    console.log("Delete fail");
                }
                return response;
            }
        )
    }

})