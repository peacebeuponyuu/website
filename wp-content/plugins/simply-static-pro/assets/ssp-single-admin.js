'use strict';

jQuery(document).ready(function ($) {
    // Check if the export was an single export.
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if ('single_export' === urlParams.get('type')) {
        $('#generate').hide();
        $('.actions').hide();
    }

    // Start generation of single.
    $('#generate-single').on('click', function () {

        var single_id = $(this).attr('data-id');

        $('#generate-single').attr('disabled', 'disabled');
        $('#export-file-container .spinner').addClass('is-active');

        $.ajax({
            type: 'POST',
            url: ssp_single_ajax.ajax_url,
            data: { 'action': 'apply_single', 'nonce': ssp_single_ajax.single_nonce, 'single_id': single_id },
            dataType: 'json',
            success: function (response) {
                if (response.success) {
                    window.location.replace(ssp_single_ajax.redirect_url + '&type=single_export');
                }
            },
        });
    });

    // Start generation of single.
    $('#delete-single').on('click', function () {
        var single_id = $(this).attr('data-id');

        $('#delete-single').attr('disabled', 'disabled');
        $('#delete-file-container .spinner').addClass('is-active');

        $.ajax({
            type: 'POST',
            url: ssp_single_ajax.ajax_url,
            data: { 'action': 'delete_single', 'nonce': ssp_single_ajax.single_nonce, 'single_id': single_id },
            dataType: 'json',
            success: function (response) {
                if (response.success) {
                    window.location.replace(ssp_single_ajax.redirect_url + '&type=single_export');
                } else {
                    $("#delete-file-container").append('<p>' + response.error + '</p>');
                    $('#delete-file-container .spinner').removeClass('is-active');
                }
            },
        });
    });
});