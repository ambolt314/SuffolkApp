var currencyConverter = {
  baseCurrency: 'gbp',
  apiUrl: 'http://www.floatrates.com/daily/',
  apiResult: null,
  init: function() {
    $('#currency-page .submit-btn').click(function() {
      currencyConverter.convert();
    });

    $.get(this.apiUrl + this.baseCurrency + '.json', function(data) {
      currencyConverter.apiResult = data;
    });

  },

  convert: function() {
    var amount = parseFloat($('#currency-page #currency-amount').val());
    var currency = $('#currency-page #currency-exchangeto').val();
    var exchangeRate = currencyConverter.apiResult[currency].rate;
    var convertedAmount = amount * exchangeRate;

    $('#currency-page .result').html(convertedAmount.toFixed(2) + '' + currency.toUpperCase());
  }


};

currencyConverter.init();
