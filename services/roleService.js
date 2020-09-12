angular.module('agri').factory('roleService',function (CONSTANT,GenericAjaxGenerator) {
    return{

        saveRole: function(object){
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_ROLE,object);
        },
        viewRoles:function (value) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.SEARCH_ROLE,{type:value},true).then(
                function (response) {
                    return response;
                })
        },
        deleteRole:function (roleId) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.DELETE_ROLE,{'roleId':roleId},true).then(
                function (response) {
                    return response;

                }
            )
        }

    }
})