angular.module('agri').factory('orderService',function (CONSTANT,GenericAjaxGenerator) {
    return{

        saveOrder: function(object){
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_ORDER,object);
        },

    }
})