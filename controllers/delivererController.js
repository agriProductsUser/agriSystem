angular.module('agri').controller('delivererController',function ($scope,delivererService) {

    $scope.submit =function (object) {

       delivererService.saveDeliverer(object).then(
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

