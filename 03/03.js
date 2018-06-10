jQuery(function () {
    CartJS.init({

        cart | json

    }, {
        "dataAPI": true,
        "requestBodyClass": "loading"
    });
});

$(function () {
    CartJS.init({
        cart | json
    }, {
        "moneyFormat": "{{ shop.money_format }}",
        "moneyWithCurrencyFormat": "{{ shop.money_with_currency_format }}"
    });
});


$('#button').click(function() {
    CartJS.addItem(716986707, 1, {
        "added_by": "Cart.js");
});