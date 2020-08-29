angular.module('agri').factory('discountService',function (CONSTANT,GenericAjaxGenerator) {
    return{

        saveDiscount: function(object){
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_DISCOUNT,object);
        },

    }
})