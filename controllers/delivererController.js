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

    $scope.searchDeliverer=function(value){
        return delivererService.viewDeliverers(value).then(
            function (res){
                return res;
            })
    }

    $scope.selectedValue = function (val) {
        $scope.deliver=val;
        $scope.sub="Update";
        $scope.deliverId=val.id;
    }
    $scope.clear = function () {
        $scope.deliver={};
    }
    $scope.delete=function () {
       return delivererService.deleteDeliverer($scope.deliverId).then(
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

});

