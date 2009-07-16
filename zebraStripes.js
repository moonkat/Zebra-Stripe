// Stripe Tag Function
// Use this to make tables stripy
/* Tags:
	stripeClass="class name"
	stripeRow="even/odd"
	stripeHoverClass="" Just as the name implies, you can specify whether the row has a rollover class, to highlight on hover for example.
*/
	
// Necessary files: jquery.js	
	
	$("[stripeClass]").each( function() {
		var me = $(this);
		var stripeClass = me.attr("stripeClass");
		var stripeRow = me.attr("stripeRow");
		var evenRow = me.find("tr:even");
		var oddRow = me.find("tr:odd");
		if (stripeClass) {
			if (stripeRow == "even") {
				$(evenRow).addClass(stripeClass);
			} else {
				$(oddRow).addClass(stripeClass);
			}
		} else {
			if (stripeRow == "even") {
				$(evenRow).css('background-color','#eeeeee !important');
			} else {
				$(oddRow).css('background-color','#eeeeee !important');
			}
		}
	});
	$("[stripeHoverClass]").each(function(){
		var me = $(this);
		var stripeClass = me.attr("stripeClass"); 
		var stripeHoverClass = me.attr("stripeHoverClass");
		var stripeRow = me.attr("stripeRow");
		var evenRow = me.find("tr:even");
		var oddRow = me.find("tr:odd");
		var tableRow = me.find("tr");
		$(tableRow).mouseover(function(){
			if (stripeRow == "even") {
				me.removeClass(stripeClass);
				} else {
				me.removeClass(stripeClass);
			}
			me.addClass(stripeHoverClass);
			})
		.mouseout(function(){
			if (stripeRow == "even") {
				$(evenRow).addClass(stripeClass);
				} else {
				$(oddRow).addClass(stripeClass);
			}
			me.removeClass(stripeHoverClass);
			});
	});
