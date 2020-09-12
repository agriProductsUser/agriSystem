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
    $scope.searchStock=function(value){
        return stockService.viewStocks(value).then(
            function (res){
                return res;
            })
    }
    $scope.selectedValue = function (val) {
        $scope.stock=val;
        $scope.sub="Update";
        $scope.stockId=val.id;
    }
    $scope.clear = function () {
        $scope.stock={};
    }

    $scope.delete=function () {
        return stockService.deleteStock($scope.stockId).then(
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