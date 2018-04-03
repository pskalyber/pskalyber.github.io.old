$(document).ready(function() {

	// active recently opened menu when refresh
	var $menu_id = window.location.hash.substring(1)
	if ($menu_id == "") {
		$menu_id = "menu_" + "home";
	}
	else {
		$menu_id = "menu_" + $menu_id;
	}
	$(".nav-link").each(function() {
		console.log($menu_id)
		$(this).removeClass("active");
		if ($(this).attr("target-menu") == $menu_id) {
			$(this).addClass("active");
		}
		
		$('.navbar-collapse').collapse('hide');

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
	});

	$(function() {
		$('[data-toggle="tooltip"]').tooltip()
	})
});
