angular.module('agri').factory('delivererService',function (GenericAjaxGenerator,CONSTANT) {
    return{
        saveDeliverer : function (obj) {
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_DELIVERER,obj);
        },
    }
})