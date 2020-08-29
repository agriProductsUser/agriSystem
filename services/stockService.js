angular.module('agri').factory('stockService',function (CONSTANT,GenericAjaxGenerator) {
    return{

        saveStock: function(object){
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_STOCK,object);
        },

    }
})