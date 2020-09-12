angular.module('agri').controller('indexController',function ($scope, indexService) {

            $scope.viewAllProducts = function () {
                indexService.readAllProducts().then(
                    function (res) {
                        $scope.productsList = res;
                })
            }
            $scope.viewCategorizedProducts = function () {
                indexService.readCategorizedProducts().then(
                    function (res) {
                        $scope.categorizedList =res;

                    }
                )
            }

})