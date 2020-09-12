angular.module('agri').factory('indexService',function (GenericAjaxGenerator,CONSTANT) {
    return{

        readAllProducts : function () {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.READ_ALL_PRODUCTS);
        },
        readCategorizedProducts : function () {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.READ_CATEGORIZED_PRODUCTS);
        }
    }

})