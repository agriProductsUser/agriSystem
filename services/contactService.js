angular.module('agri').factory('contactService',function (GenericAjaxGenerator,CONSTANT) {
    return{
        saveContacts : function (obj) {
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_CONTACT_DETAILS,obj);
        },

    }
})