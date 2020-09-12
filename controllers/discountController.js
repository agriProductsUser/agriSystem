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
    $scope.searchDiscount=function (value) {
        return productService.viewDiscounts(value).then(
            function (res) {
                return res;
            })
    }
    $scope.selectedValue =function (val) {
        $scope.dis=val;
        $scope.sub="Update";
        $scope.discountId=val.id;

    }
    $scope.clear = function () {
        $scope.dis={};
    }
    $scope.delete=function () {
        return discountService.deleteDiscount($scope.discountId).then(
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