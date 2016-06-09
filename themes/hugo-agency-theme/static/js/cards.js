(function($) {
    "use strict";
    var $rentCard = $('.js-card-rent'),
        $sellCard = $('.js-card-sell');

    function goToRent() {
        window.location = '/vermieten';
    }

    function goToSell() {
        window.location = '/verkaufen';
    }

    if ($rentCard.length > 0) {
        $rentCard.bind('click', goToRent);
    }

    if ($sellCard.length > 0) {
        $sellCard.bind('click', goToSell);
    }
}(jQuery));
