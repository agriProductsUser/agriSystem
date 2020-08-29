angular.module('agri').factory('sellerService',function (CONSTANT,GenericAjaxGenerator) {
    return{

        saveSeller: function(object){
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_SELLER,object);
        },

    }
})