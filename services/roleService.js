angular.module('agri').factory('roleService',function (CONSTANT,GenericAjaxGenerator) {
    return{

        saveRole: function(object){
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_ROLE,object);
        },

    }
})