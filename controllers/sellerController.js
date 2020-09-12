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
    $scope.searchSeller=function (value) {
        return sellerService.viewSellers(value).then(
            function (res) {
                return res;
            })
    }
    $scope.selectedValue =function (val) {
        $scope.sel=val;
        $scope.sub="Update";
        $scope.sellerId=val.id;
    }

    $scope.clear = function () {
        $scope.sel={};
    }
    $scope.delete=function () {
        return sellerService.deleteSeller($scope.sellerId).then(
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