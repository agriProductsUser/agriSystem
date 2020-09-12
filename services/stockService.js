angular.module('agri').factory('stockService',function (CONSTANT,GenericAjaxGenerator) {
    return{

        saveStock: function(object){
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_STOCK,object);
        },
        viewStocks:function (value) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.SEARCH_STOCK,{type:value},true).then(
                function (response) {
                    return response;
                })
        },
        deleteStock:function (stockId) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.DELETE_STOCK,{'stockId':stockId},true).then(
                function (response) {
                    return response;

                }
            )
        },

    }
})