/*
class for checking if a generated coordinates
already exist in a db
*/

function CoordinatesChecker(url){
	this.url = url;

	this.checkCoord = function(coord, doCallback){
		if(!url) return;
		coord = coord || 17;

		$.ajax({
			type: "POST",
			async: false,
			url: url,
			data: {'coord': coord},
			success: doCallback
		});
	};
}