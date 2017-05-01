;
(function($) {
    $.bingSearch = function(option) {

        let bingApiUrl = 'https://api.cognitive.microsoft.com/bing/v5.0/search';
        var options = $.extend({
            'keyword': '',
            'apiKey': '',
        }, option || {});

        $.ajax({
            url: bingApiUrl,
            data: {
                'q': options.keyword,
            },
            headers: {
                'Ocp-Apim-Subscription-Key': options.apiKey
            },
            success: function(response) {
                if ($.isFunction(options.onSuccess)) {
                    options.onSuccess.call(this, response);
                }
            },
            error: function(response) {
                console.log(response.responseJSON);
                return;
            }
        });
    }
})(jQuery);
