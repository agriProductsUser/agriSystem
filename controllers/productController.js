angular.module('agri').controller('productController',function ($scope,productService) {

    $scope.submit =function (object) {

        productService.saveProduct(object).then(
            function (res) {
                if (res){
                    console.log("success");

                }
                else {
                    console.log("Failed");
                }
            }
        )

    }

});

