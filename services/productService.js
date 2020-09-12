angular.module('agri').factory('productService',function (GenericAjaxGenerator,CONSTANT) {
    return{

        saveProduct : function (obj) {
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_PRODUCT,obj);
        },

        viewProducts:function (value) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.SEARCH_PRODUCTS,{type:value},true).then(
                function (response) {
                return response;
            })
        },

        deleteProduct:function (proId) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.DELETE_PRODUCT,{'proId':proId},true).then(
                function (response) {
                    return response;
                }
            )

        }

    }
})