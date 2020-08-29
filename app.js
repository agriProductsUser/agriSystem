(function () {
    'use strict';
    var agri =angular.module('agri').config(config).constant('CONSTANT',constant())

    function constant() {
            return{
                'SAVE_PAYMENT':'payment/savePayments',
                'VIEW_PAYMENT':'payment/viewAllPayments',
                'SAVE_ORDER':'order/saveOrders',
            }
    }
})

