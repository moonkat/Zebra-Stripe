// Stripe Tag Function
// Use this to make tables stripy
/* Tags:
	stripeClass="class name"
	stripeRow="even/odd"
	stripeHoverClass="" Just as the name implies, you can specify whether the row has a rollover class, to highlight on hover for example.
*/
	$("[stripeClass]").each( function() {
		var stripeClass = $(this).attr("stripeClass");
		var stripeRow = $(this).attr("stripeRow");
		var evenRow = $(this).find("tr:even");
		var oddRow = $(this).find("tr:odd");
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
		var stripeClass = $(this).attr("stripeClass"); 
		var stripeHoverClass = $(this).attr("stripeHoverClass");
		var stripeRow = $(this).attr("stripeRow");
		var evenRow = $(this).find("tr:even");
		var oddRow = $(this).find("tr:odd");
		var tableRow = $(this).find("tr");
		$(tableRow).mouseover(function(){
			if (stripeRow == "even") {
				$(this).removeClass(stripeClass);
				} else {
				$(this).removeClass(stripeClass);
			}
			$(this).addClass(stripeHoverClass);
			})
		.mouseout(function(){
			if (stripeRow == "even") {
				$(evenRow).addClass(stripeClass);
				} else {
				$(oddRow).addClass(stripeClass);
			}
			$(this).removeClass(stripeHoverClass);
			});
	});
