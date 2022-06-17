// Copyright (c) 2022, Rutuja Jadhav and contributors
// For license information, please see license.txt

frappe.ui.form.on('Movie Booking', {
	select_your_slots: function(frm,doctype,name) {
	   

	   frappe.msgprint("Selected slot:"+frm.doc.select_slot);
	   frappe.call({
		   method: 'moviebooking.movie_booking.doctype.movie_booking.movie_booking.get_available_seats',
		   args: {
			   theater_name: frm.doc.theater_name,
			   selected_date:frm.doc.select_date,
			   selected_slot:frm.doc.select_slot
		   },
		   callback: (r) => {
			   
			   frappe.msggprint(JSON.stringify(r.message));
				
			   html_text= "Platinum:"+r.message.pl_ava_seats+"</br>"+" Gold:"+r.message.gld_ava_seats;
			   frm.doc.available_seats=html_text;
			// frappe.model.set_value(doctype,name,'available_seats',html_text)
			   frm.refresh_field('available_seats');

		   }
	   })
	   
	}

   
});
frappe.ui.form.on('Movie Booking','onload',function(frm,doctype,name){
frm.set_query('theater', () => {
   return {
	   query: 'moviebooking.movie_booking.doctype.movie_booking.movie_booking.get_theater',
	   filters: {
		   "movie_name": frm.doc.movie_name
	   }
   }
});
});



// frappe.ui.form.on('Book My Show', "theater", function(frm, doctype, name) {
// 	var row = locals[doctype][name];
   
// 	frappe.call({
//         method: 'bookmyshow.book_my_show.doctype.book_my_show.book_my_show.get_movie_slots',
//         args: {
//             'parent':row.theater
		   
//         },
				
//         callback: function(r) {
		   
// 			var movie_list=[];
// frm.refresh_field('available_seats');

// 			}
// 		})
	   
// 	 }

   
// });

	
//  });

//  frappe.ui.form.on('Book My Show', "theater", function(frm, doctype, name) {
// 	 var row = locals[doctype][name];
	
// 	 frappe.call({
// 		 method: 'bookmyshow.book_my_show.doctype.book_my_show.book_my_show.get_movie_slots',
// 		 args: {
// 			 'parent':row.theater
			
// 		 },
				 
// 		 callback: function(r) {
			
// 			 var movie_list=[];
// 			 var movie_list=[];
// 			var slot_list=[];
// 			$.each(r.message, function(i,d){
// 				// msgprint(d.movie_name);
// 				// msgprint(d.slots);
// 				movie_list.push(d.movie_name);
// 				slot_list.push(d.slots);
// 				// frappe.model.set_value(doctype,name,'movie',d.movie_name)
// 				// frappe.model.set_value(doctype,name,'slots',d.slots)
// 			})
// 			frm.set_df_property('select_movie', 'options', movie_list);
// 			frm.refresh_field('select_movie');		
// 			frm.set_df_property('select_slots', 'options', slot_list);
// 			frm.refresh_field('select_slots');			
		   
//         }
// 	});
// });

