$(document).ready(function() {

	$(".menu_template").each(function() {
		if ($(this).attr("id") == "menu_home") {
			$(this).show();
		} else {
			$(this).hide();
		}
	});

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
});
