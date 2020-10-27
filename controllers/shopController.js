angular.module('agri').controller('shopController',function ($scope,shopService,CONSTANTS,$localStorage,productService){

    $scope.viewProducts =function () {
        productService.viewProducts().then(
            function (response) {
                $scope.productList = response;
        })
    }
});