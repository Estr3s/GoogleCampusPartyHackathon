$(document).live("click", function(event){ 
	event.preventDefault();

	var objTarget = event.target;
	
	var borrado=false;
	var padreHREF = $(event.target).closest("a");
	
	if ($(padreHREF).length>0) {
		$(padreHREF).remove();
		borrado = !borrado;
	}
	
	if  (!borrado) {
		$(objTarget).remove();			
	}

	return false;
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	return "";
});
