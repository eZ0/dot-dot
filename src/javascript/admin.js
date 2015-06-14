var checkid;
var updatename;
var updatecountry;
var updatepublished;
var updatefile;

$( document ).ready(function() {
	initAdminButtons();
	

function initAdminButtons() {
	$('.btnedit').click( function() {
		var id = $(this).data('id');
		var name = $('#'+id+'-name').text();
		var country = $('#'+id+'-country').text();
		var url = $('#'+id+'-url').text();
		var isPublished = $('.'+id+'_chkupd').val();
		
		//change all fields to input with value
		$('#'+id+'-name').html('<input type=text id=iName' + id + ' value='+ name + ' name="name">'); 
		$('#'+id+'-country').html('<input type=text id=iCoutry-' + id + ' value='+ country + ' name="country">'); 
		$('#'+id+'-url').html('<input type=text id=iUrl' + id + ' value='+ url + ' name="url">'); 

		$('#'+'iCoutry-'+id).val(country);

		if (isPublished == 1) {
			$('#'+id+'-isPublished').html('<input class='+id+'_chkupd type=checkbox checked value=1 >');
		}else{
			$('#'+id+'-isPublished').html('<input class='+id+'_chkupd type=checkbox value=0 >');
		}
	});

	$('.btnupdate').click( function(e) {
		e.preventDefault();

		checkid = $(this).data('id');
		prepareData(checkid);
	});

	$('.btndelete').click( function(e) {
		e.preventDefault();

		checkid = $(this).data('id');
		delRow(checkid);
	});

	$('.btnuploadedited').click( function(e) {
		checkid = $(this).data('id');
		updatefile = $('#'+checkid+'-form input[name="file"]').val();
		console.log(checkid + ' ' + updatefile);
		uploadEditedImage(checkid);
	});
}
function prepareData(id) {
		
		updatename = $('#'+id+'-name input[name="name"]').val();
		updatecountry = $('#'+id+'-country input[name="country"]').val();
		updateurl = $('#'+id+'-url input[name="url"]').val();

		
		if( $('.'+id+'_chkupd').prop('checked') ){
			updatepublished = 1;
		}else{
			updatepublished = 0;
		}	
		updateRow(id);
}

function updateRow(id){
	$.ajax({
		type: "POST",
		async: false,
		url: "assets/data/updatedata.php",
		data: {'updatename': updatename, 'updatecountry':updatecountry, 'updatepublished':updatepublished, 'updateurl':updateurl, 'updateid':id }
	}).done(function(data) {
		//change all fields back to normal
		$('#'+id+'-name').html(updatename); 
		$('#'+id+'-country').html(updatecountry);
		$('#'+id+'-url').html(updateurl);

		if (updatepublished == 1) {
			$('#'+id+'-isPublished').html('<input class='+id+'_chkupd type=checkbox checked value=1 disabled>');
		}else{
			$('#'+id+'-isPublished').html('<input class='+id+'_chkupd type=checkbox value=0 disabled>');
		}
	});
}

function delRow(id){
	$.ajax({
		type: "POST",
		async: false,
		url: "assets/data/deletedata.php",
		data: { 'updateid':id }
	}).done(function(data) {
		console.log("succes " + data);
		//hide deleted field
		$('#'+id+'-row').fadeOut('400', function() {});
	});
}

function uploadEditedImage(id){
	var fd = new FormData(document.getElementById(id+"-form"));
	fd.append("CustomField", "This is some extra data");
	$.ajax({
		type: "POST",
		url: "assets/data/uploadimagedata.php?updatefileid="+id,
		data: fd,
		processData: false,  // tell jQuery not to process the data
		contentType: false   // tell jQuery not to set contentType
	}).done(function(data) {
		console.log("succesful file upload call " + data);
	});
}










