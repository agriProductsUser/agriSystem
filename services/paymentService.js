angular.module('agri').factory('paymentService',function (GenericAjaxGenerator,CONSTANT) {
return{
    savePayment : function (obj) {
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_PAYMENT,obj);
    },


    viewPay:function () {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.VIEW_PAYMENT);
    },

}
})