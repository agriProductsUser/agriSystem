angular.module('agri').factory('sellerService',function (CONSTANT,GenericAjaxGenerator) {
    return{

        saveSeller: function(object){
            return GenericAjaxGenerator.postReq(CONSTANT.SAVE_SELLER,object);
        },
        viewSellers:function (value) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.SEARCH_SELLER,{type:value},true).then(
                function (response) {
                    return response;
                })
        },
        deleteSeller:function (sellerId) {
            return GenericAjaxGenerator.getReq('GET',CONSTANT.DELETE_SELLER,{'sellerId':sellerId},true).then(
                function (response) {
                    return response;

                }
            )
        }

    }
})