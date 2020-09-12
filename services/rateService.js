angular.module('agri').factory('rateService',function (CONSTANT,GenericAjaxGenerator) {
    return{

        saveRate: function(object){
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_RATES,object);
        },

        viewRates:function (value) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.SEARCH_RATES,{type:value},true).then(
                function (response) {
                    return response;
                })
        },
        deleteRate:function (rateId) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.DELETE_RATES,{'rateId':rateId},true).then(
                function (response) {
                    return response;

                }
            )
        }
    }
})