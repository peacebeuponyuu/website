'use strict';

jQuery(document).ready(function ($) {

    // Show hide description for GitHub.
    $('#deliveryMethod').on('change', function () {
        var delivery_method = $(this).val();

        if ('github' === delivery_method) {
            $('.github-deploy').show();
            $('.cdn-deploy').hide();
        } else if ('cdn' === delivery_method) {
            $('.cdn-deploy').show();
            $('.github-deploy').hide();
        } else {
            $('.github-deploy').hide();
            $('.cdn-deploy').hide();
        }
    });

    // Delete repository.
    $('#github-add').on('click', function () {
        $.ajax({
            type: 'POST',
            url: sspd_ajax.ajax_url,
            data: { 'action': 'add_repository', 'nonce': sspd_ajax.add_nonce },
            dataType: 'json',
            error: function (response) {
                // Remove old messages.
                $('.updated').remove();
                $('.error').remove();

                if (response.message) {
                    var message = '<div class="fade error"><p><strong>' + response.message + '</strong></p></div>';
                    $('#settingsPage').prepend(message);
                }
            },
            success: function (response) {
                // Remove old messages.
                $('.updated').remove();
                $('.error').remove();

                var message = '<div class="fade updated"><p><strong>' + response.message + '</strong></p></div>';

                if (true == response.error) {
                    var message = '<div class="fade error"><p><strong>' + response.message + '</strong></p></div>';
                }
                $('#sistTabs').append(message);
            },
        });
    });

    // Delete repository.
    $('#github-delete').on('click', function () {
        $.ajax({
            type: 'POST',
            url: sspd_ajax.ajax_url,
            data: { 'action': 'delete_repository', 'nonce': sspd_ajax.delete_nonce },
            dataType: 'json',
            error: function (response) {
                // Remove old messages.
                $('.updated').remove();
                $('.error').remove();

                if (response.message) {
                    var message = '<div class="fade error"><p><strong>' + response.message + '</strong></p></div>';
                    $('#settingsPage').prepend(message);
                }
            },
            success: function (response) {
                // Remove old messages.
                $('.updated').remove();
                $('.error').remove();

                var message = '<div class="fade updated"><p><strong>' + response.message + '</strong></p></div>';

                if (true == response.error) {
                    var message = '<div class="fade error"><p><strong>' + response.message + '</strong></p></div>';
                }
                $('#sistTabs').append(message);
            },
        });
    });


    $('#exclude-search-url').click(function () {
        var last_row = $('.excludable-search-url-row').last();

        if ($('#excludable-search-url-row-template').length > 0) {
            var clone_row = $('#excludable-search-url-row-template').clone().removeAttr('id');
        } else {
            $('#excludable-search-url-rows').append('<div class="excludable-search-url-row" id="excludable-search-url-row-template"><input type="text" name="search-excludable[0]" value="" size="40" /><input class="button remove-excludable-search-url-row" type="button" name="remove" value="Remove" /></div>');
            var clone_row = $('#excludable-search-url-row-template').clone().removeAttr('id');
        }

        var timestamp = new Date().getTime();
        var regex = /excludable\[0\]/g;

        clone_row.html(clone_row.html().replace(regex, 'excludable[' + timestamp + ']'));
        clone_row.find('input[type=text]').val('');
        clone_row.insertAfter(last_row);
    });

    $('#excludable-search-url-rows').on('click', '.remove-excludable-search-url-row', function () {
        var $row = $(this).closest('.excludable-search-url-row');
        $row.remove();
    });
});