$(document).ready(function() {

	// active recently opened menu when refresh
	var $menu_id = "menu_" + window.location.hash.substring(1)
	$(".nav-link").each(function() {

		$(this).removeClass("active");
		if ($(this).attr("target-menu") == $menu_id) {
			$(this).addClass("active");
		}
		
		$('.navbar-collapse').collapse('hide');

		menu_id = $(this).attr("target-menu");
		$(".menu_template").each(function() {
			if ($(this).attr("id") == $menu_id) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});

	});
	
	$('.navbar-collapse').collapse('hide');

	$(".nav-link").click(function() {
		// only give an active class when the clicked menu is not CURRICULUM
		// VITAE
		if ($(this).attr("target-menu") == "menu_cv") {
			return;
		} else {
			$(".nav-link").removeClass("active");
			$(this).addClass("active");

			$('.navbar-collapse').collapse('hide');

			menu_id = $(this).attr("target-menu");
			$(".menu_template").each(function() {
				if ($(this).attr("id") == menu_id) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		}
	});

	$(function() {
		$('[data-toggle="tooltip"]').tooltip()
	})
});
