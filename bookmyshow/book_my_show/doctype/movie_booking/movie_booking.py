# Copyright (c) 2022, Rutuja Jadhav and contributors
# For license information, please see license.txt

# import frappe
from selectors import SelectSelector
import frappe
from frappe.model.document import Document
from git import refresh

class MovieBooking(Document):
	pass
# @frappe.whitelist()
# def get_movie_slots(parent=None):
# 	movie_details = frappe.db.get_list('Movie Details',filters={'parent': parent },fields=['movie_name', 'slots'])
# 	frappe.msgprint(movie_details)
# 	for i in movie_details:
# 		frappe.msgprint(str(i))
# 	return movie_details

@frappe.whitelist()
def get_available_seats(theater_name,selected_date,selected_slots):

	bms_list = frappe.get_list("Movie Booking",filters={'theater_name':theater_name,'select_date':selected_date,'select_slots':selected_slots})

	pl_occu_seats=0
	# gld_occu_seats=0
	for bms in bms_list:
		for book_ticket in bms.book_ticket:
			if book_ticket.seats_type == 'Platinum':
				pl_occu_seats=pl_occu_seats+book_ticket.no_of_seats
	pl_total_seats=0
	theater_seats_ct = frappe.get_doc("Seat Details",{'parent':theater_name})
	if theater_seats_ct.seat_types =='Platinum':
		pl_total_seats=theater_seats_ct.available_seats

	gld_occu_seats=0
	for bms in bms_list:
		for book_ticket in bms.book_ticket:
			if book_ticket.seats_type == 'Gold':
				gld_occu_seats=gld_occu_seats+book_ticket.no_of_seats
	gld_total_seats=0
	theater_seats_ct = frappe.get_doc("Seat Details",{'parent':theater_name})
	if theater_seats_ct.seat_types =='Gold':
		gld_total_seats=theater_seats_ct.available_seats



	pl_ava_seats=pl_total_seats-pl_occu_seats
	gld_ava_seats=pl_total_seats-pl_occu_seats

	return pl_ava_seats,gld_ava_seats

	frappe.msgprint(theater_name)


	
