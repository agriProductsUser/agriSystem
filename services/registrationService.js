angular.module('agri').factory('registrationService',function (CONSTANT,GenericAjaxGenerator) {
    return{

        saveCustomer: function(object){
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_CUSTOMER,object);
        },

    }
})