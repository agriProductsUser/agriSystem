angular.module('agri').controller('productController',function ($scope,productService,CONSTANTS,$localStorage) {

    $scope.sub="Submit";
    var buttonText = $scope.sub;

    $scope.submit =function (object) {

        var uploadUrl = CONSTANTS.SERVER + CONSTANTS.SAVE_PRODUCT;
        var formData = new FormData();

        formData.append('agri', angular.toJson(object, true));

        var proImage = document.getElementById("productImage");

        var file = proImage.files[0];

        if(file != undefined) {
            formData.append('file', file);
        }

        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (readBody(request) == true) {
                    console.log('','Save successfully!');
                    $scope.productForm.$setPristine();
                } else {
                    console.log('Save failed');
                }
            }
        };
        request.open('POST', uploadUrl, true);
        request.setRequestHeader('Authorization', $localStorage.token);
        request.send(formData);

        // productService.saveProduct(object).then(
        //
        //     function (res) {
        //         if (res){
        //             if(buttonText=="Submit"){
        //                 console.log("saved");
        //             }else
        //                if(buttonText=="Update") {
        //                 console.log("Updated");
        //             }
        //         }
        //         else {
        //             console.log("Failed");
        //         }
        //     }
        // )

    }

    $scope.searchProduct=function (value) {
        return productService.viewProducts(value).then(
            function (res) {
                return res;
        })
    }

    $scope.selectedValue =function (val) {
                 $scope.pro=val;
                $scope.sub="Update";
                $scope.proId=val.id;
    }

    $scope.clear = function () {
            $scope.pro={};
    }
    $scope.delete= function () {
           return productService.deleteProduct($scope.proId).then(
                function (res) {
                    if(res ==true){
                        console.log("Deleted ");
                    }else {
                        console.log("Delete fail");
                    }
                    return res;
            })
    }
});

