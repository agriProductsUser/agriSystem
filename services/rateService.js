angular.module('agri').factory('rateService',function (CONSTANT,GenericAjaxGenerator) {
    return{

        saveRate: function(object){
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_RATES,object);
        },

    }
})