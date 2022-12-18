'use strict';

jQuery(document).ready(function ($) {
	// Start generation of build.
	$('.generate-build').on('click', function () {
		var term_id = $(this).attr('data-term-id');

		$.ajax({
			type: 'POST',
			url: sspb_ajax.ajax_url,
			data: { 'action': 'apply_build', 'nonce': sspb_ajax.run_build_nonce, 'term_id': term_id },
			dataType: 'json',
			success: function (response) {
				if (response.success) {
					window.location.replace(sspb_ajax.redirect_url);
				}
			},
		});
	});
});