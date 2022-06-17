// Copyright (c) 2022, Rutuja Jadhav and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Movie Report"] = {
	"filters": [
		{
			fieldname:"select_date",
			label:__("Date"),
			fieldtype:"Date",
			default: frappe.defaults.get_user_default("select_date"),
			reqd:1
		},	

	]
};
