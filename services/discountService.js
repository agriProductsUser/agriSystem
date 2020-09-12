angular.module('agri').factory('discountService',function (CONSTANT,GenericAjaxGenerator) {
    return{

        saveDiscount: function(object){
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_DISCOUNT,object);
        },
        viewDiscounts:function (value) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.SEARCH_DISCOUNT,{type:value},true).then(
                function (response) {
                    return response;
                })
        },
        deleteDiscount:function (discountId) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.DELETE_DISCOUNT,{'discountId':discountId},true).then(
                function (response) {
                    return response;

                }
            )
        }
    }
})