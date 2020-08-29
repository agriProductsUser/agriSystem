angular.module('agri').controller('roleController',function ($scope,roleService) {

    $scope.submit=function(obj){
        roleService.saveRole(obj).then(
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