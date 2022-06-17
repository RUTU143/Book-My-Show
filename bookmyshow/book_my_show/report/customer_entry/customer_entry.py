# Copyright (c) 2022, Rutuja Jadhav and contributors
# For license information, please see license.txt

import frappe

def execute(filters=None):
	columns, data = [], []
	columns = ["customer","core"]
	data=[[1,2],[3,4]]
	return columns, data
	# 	{
	# 	'fieldname':'first_name',
	# 	'label': 'First Name',
	# 	'fieldtype': 'Data'
	# 	}
	# ]
		  
	# data = [
	# 	{ 
	# 	'first_name': 'Rutuja'
	# 	}
	# ]
