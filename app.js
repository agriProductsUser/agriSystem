(function () {
    'use strict';
    var agri =angular.module('agri').config(config).constant('CONSTANT',constant())

    function constant() {
            return{
                'SAVE_PAYMENT':'payment/savePayments',
                'VIEW_PAYMENT':'payment/viewAllPayments',
                'SAVE_ORDER':'order/saveOrders',
                'SAVE_CHECKOUT_DETAILS':'checkout/saveCheckoutDetails',
                'SAVE_CONTACT_DETAILS':'contact_us/saveContactDetails',
                'SAVE_PRODUCT':'product/saveProducts',
                'SAVE_DELIVERER':'deliverer/saveDeliverers',
                'SAVE_RATES':'rate/saveRates',
                'SAVE_DISCOUNT':'discount/saveDiscounts',
                'SAVE_SELLER':'seller/saveSellers',
                'SAVE_STOCK':'stock/saveStock',
                'SAVE_ROLE':'role/saveRole',
                'SAVE_CUSTOMER':'registration/saveCustomers',
            }
    }
})

