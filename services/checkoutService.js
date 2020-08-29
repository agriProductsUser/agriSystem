angular.module('agri').factory('checkoutService',function (GenericAjaxGenerator,CONSTANT){

    return{

        saveCheckout:function(obj){
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_CHECKOUT_DETAILS,obj);
        }
    }

})