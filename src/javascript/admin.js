var checkid;
$( document ).ready(function() {
	initAdminButtons();
});

function initAdminButtons() {
	$('#_btnedit').click( function() {
		var id = $(this).data('id');
		var name = $('#'+id+'-name').text();
		// var country = $('#'+id+'-country').text();
		// var url = $('#'+id+'-url').text();
		
		//change all fields to input with value
		$('#'+id+'-name').html('<input type=text id=' + id + ' value='+ name + ' name="name">'); 
	});

	$('#_btnupdate').click( function(e) {
		e.preventDefault();

		checkid = $(this).data('id');
		prepareData(checkid);
	});
}
function prepareData(id) {
		console.log('just checking');
		updatename = encodeURIComponent($('#'+id+'-name input[name="name"]').val());
		console.log('check '+id + ' ' +updatename);
		updateRow(id);
}

function updateRow(id){
	console.log('just updating');
	$.ajax({
		type: "POST",
		async: false,
		url: "assets/data/updatedata.php",
		data: {'updatename': updatename, 'updateid':id }
	}).done(function(data) {
		console.log("succes " + data);
	});
}