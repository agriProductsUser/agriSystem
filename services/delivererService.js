angular.module('agri').factory('delivererService',function (GenericAjaxGenerator,CONSTANT) {
    return{
        saveDeliverer : function (obj) {
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_DELIVERER,obj);
        },

        viewDeliverers:function (value) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.SEARCH_DELIVERERS,{type:value},true).then(
                function (response) {
                    return response;
                })
        },
        deleteDeliverer:function (deliverId) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.DELETE_DELIVERER,{'deliverId':deliverId},true).then(
                function (response) {
                    return response;

                }
            )
        }
    }
})