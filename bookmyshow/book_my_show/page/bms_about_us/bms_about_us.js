frappe.pages['bms-about-us'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Home',
		single_column: true
	});
	$("<div class='perm-engine' style='min-height: 50px; padding: 5px;'></div>").appendTo(page.main);

	$(frappe.render_template("about_us", {})).appendTo(page.main);
}