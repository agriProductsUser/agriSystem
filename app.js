(function () {
    'use strict';
    var agri =angular.module('agri').config(config).constant('CONSTANT',constant())

    function constant() {
            return{
                'SERVER':'http://localhost:8080/agriService',
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
                'SEARCH_PRODUCTS':'product/searchProductByName',
                'SEARCH_DELIVERERS':'deliverer/searchDelivererByName',
                'SEARCH_RATES':'rate/searchRatesByName',
                'SEARCH_DISCOUNT':'discount/searchDiscountById',
                'SEARCH_SELLER':'seller/searchSellerByName',
                'SEARCH_STOCK':'stock/searchStockByName',
                'SEARCH_ROLE':'role/searchRoleByName',
                'DELETE_PRODUCT':'product/deleteProduct',
                'DELETE_DELIVERER':'deliverer/deleteDeliverer',
                'DELETE_RATES':'rate/deleteRates',
                'DELETE_DISCOUNT': 'discount/deleteDiscount',
                'DELETE_SELLER':'seller/deleteSeller',
                'DELETE_STOCK':'stock/deleteStock',
                'DELETE_ROLE':'role/deleteRole',
                'READ_ALL_PRODUCTS':'public/readAllProducts',
                'READ_CATEGORIZED_PRODUCTS':'public/readCategorizedProducts',

            }
    }
})

