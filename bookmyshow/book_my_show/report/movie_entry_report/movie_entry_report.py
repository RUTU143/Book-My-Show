# Copyright (c) 2022, Rutuja Jadhav and contributors
# For license information, please see license.txt

# from unicodedata import category
from warnings import filters
import frappe


def execute(filters=None):
	columns, data = [], []
	return get_column(), get_data(filters)

def get_column():
	columns = ["Movie Name","Actress Name","Director Name","Actor Name"]
	return columns

def get_data(filters):
	data =frappe.get_all("Movie",filters=filters,fields=["movie_name","actress_name","director_name","actor_name"])
	return data	
