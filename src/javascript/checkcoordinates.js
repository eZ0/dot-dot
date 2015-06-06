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
		return ;


		//sending unique coordinate of generated image
		var coordInput = document.createElement("input") ;
		coordInput.setAttribute("name", 'coord');
		coordInput.setAttribute("value", coord);
		coordInput.setAttribute("type", "hidden");

		var myForm = document.createElement("form");
		myForm.method = 'post';
		myForm.action = url;
		myForm.appendChild(coordInput);

		//communicating with php via submiting form
		document.body.appendChild(myForm);
		myForm.submit() ;
		document.body.removeChild(myForm);
	};
}