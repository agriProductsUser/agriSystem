angular.module('agri').factory('productService',function (GenericAjaxGenerator,CONSTANT) {
    return{

        saveProduct : function (obj) {
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_PRODUCT,obj);
        },

    }
})