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
    $scope.searchRole=function(value){
        return roleService.viewRoles(value).then(
            function (res){
                return res;
            })
    }
    $scope.selectedValue = function (val) {
        $scope.role=val;
        $scope.sub="Update";
        $scope.roleId=val.id;

    }
    $scope.clear = function () {
        $scope.role={};
    }

    $scope.delete=function () {
        return roleService.deleteRole($scope.roleId).then(
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