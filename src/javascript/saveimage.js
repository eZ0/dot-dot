/*
class for saving canvas as png and renaming it
communicates with saveimage.php which sets headers
*/
function CanvasSaver(url) {

	this.url = url;

	this.savePNG = function(cnvs, fname, coord, down) {
		//if no canvas or url to .php - do nothing
		if(!cnvs || !url) return;

		//name file 'picture.png' if there is no file name given
		fname = fname || 'picture';

		//saving canvas element
		var data = cnvs.toDataURL("image/png");
		data = data.substr(data.indexOf(',') + 1).toString();

		//unique coordinates
		coord = coord || 10;
		down = down || 1111;

		//creating hidden form for sending our data for image to php and back
		var dataInput = document.createElement("input") ;
		dataInput.setAttribute("name", 'imgdata') ;
		dataInput.setAttribute("value", data);
		dataInput.setAttribute("type", "hidden");

		var nameInput = document.createElement("input") ;
		nameInput.setAttribute("name", 'name') ;
		nameInput.setAttribute("value", fname + '.png');

		//sending unique coordinate of saved image
		var coordInput = document.createElement("input") ;
		coordInput.setAttribute("name", 'coord');
		coordInput.setAttribute("value", coord);
		coordInput.setAttribute("type", "hidden");

		var downloadInput = document.createElement("input") ;
		downloadInput.setAttribute("name", 'down') ;
		downloadInput.setAttribute("value", down);
		// downloadInput.setAttribute("type", "hidden");

		var myForm = document.createElement("form");
		myForm.method = 'post';
		myForm.action = url;
		myForm.appendChild(dataInput);
		myForm.appendChild(nameInput);
		myForm.appendChild(coordInput);
		myForm.appendChild(downloadInput);

		//communicating with php via submiting form
		document.body.appendChild(myForm);
		myForm.submit() ;
		document.body.removeChild(myForm);
	};
}