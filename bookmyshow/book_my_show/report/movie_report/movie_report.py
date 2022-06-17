# Copyright (c) 2022, Rutuja Jadhav and contributors
# For license information, please see license.txt

#import frappe


# from dataclasses import fields
import frappe

def execute(filters=None):
	columns, data = [], []
	# columns = ["customer name","address"]
	# data =[[1,2],[3,4]]
	return get_column(), get_data(filters)

def get_column():
	columns = ["Customer name","Theater Name","Date","Grand Total"]
	return columns

def get_data(filters):
	data =frappe.get_all("Movie Booking",filters=filters,fields=["customer_name","theater_name","select_date","grand_total"])
	return data