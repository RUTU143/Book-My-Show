// Copyright (c) 2022, Rutuja Jadhav and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Booking Movie Entry"] = {
	"filters": [
		{
			"fieldname": "customer_name",
			"label": "Customer Name",
			"fieldtype": "Data"

		},
		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"width": "80",
			"reqd": 1,
			"default": frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			},
			{
				"fieldname":"to_date",
				"label": __("To Date"),
				"fieldtype": "Date",
				"width": "80",
				"reqd": 1,
				"default": frappe.datetime.get_today()
			},

			{
				"fieldname": "movie",
				"label":__("Movie"),
				"fieldtype":"Link",
				"options":"Movie",
				"default": frappe.defaults.get_user_default("movie")
						
			},
		
			
	{
		"fieldname":"theater",
		"label": __("Theater"),
		"fieldtype": "Link",
		"options": "Theater",

		"get_query" : function(){
			var Movie = frappe.query_report_filters_by_name.movie.get_value();
			return{
				"doctype": "Book My Show",
				"filters":{
					"movie":Movie,
			}
		}
	}
},
]
}
