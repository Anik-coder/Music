/**
 * @package     SP Simple Portfolio
 *
 * @copyright   Copyright (C) 2010 - 2015 JoomShaper. All rights reserved.
 * @license     GNU General Public License version 2 or later.
 */

jQuery(function($) {

    var $container = $('.gallery-untold-items');

    var $sizer = $container.find('.shuffle__sizer');

    $container.shuffle({
        itemSelector: '.gallery-untold-item',
        sequentialFadeDelay: 150,
        sizer: $sizer
    });

    // Filters
    $('.gallery-untold-filter li a').on('click', function(event) {
        event.preventDefault();
        var $self = $(this);
        var $this = $(this).parent();

        if ($this.hasClass('active')) {
            return;
        }

        $self.closest('ul').children().removeClass('active');
        $self.parent().addClass('active');

        $container.shuffle('shuffle', $this.data('group'));
    });

});
