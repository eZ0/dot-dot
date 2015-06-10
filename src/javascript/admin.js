var checkid;
var updatename;
var updatecountry;

//TODO: checkbox/ Upload-download picture

$( document ).ready(function() {
	initAdminButtons();
});

function initAdminButtons() {
	$('.btnedit').click( function() {
		var id = $(this).data('id');
		var name = $('#'+id+'-name').text();
		var country = $('#'+id+'-country').text();
		// var url = $('#'+id+'-url').text();
		
		//change all fields to input with value
		$('#'+id+'-name').html('<input type=text id=' + id + ' value='+ name + ' name="name">'); 
		$('#'+id+'-country').html('<input type=text id=' + id + ' value='+ country + ' name="country">'); 
	});

	$('.btnupdate').click( function(e) {
		e.preventDefault();

		checkid = $(this).data('id');
		prepareData(checkid);
	});
}
function prepareData(id) {
		
		updatename = encodeURIComponent($('#'+id+'-name input[name="name"]').val());
		updatecountry = encodeURIComponent($('#'+id+'-country input[name="country"]').val());
		
		updateRow(id);
}

function updateRow(id){
	console.log('just updating');
	$.ajax({
		type: "POST",
		async: false,
		url: "assets/data/updatedata.php",
		data: {'updatename': updatename, 'updatecountry':updatecountry, 'updateid':id }
	}).done(function(data) {
		console.log("succes " + data);
		//change all fields back to normal
		$('#'+id+'-name').html(updatename); 
		$('#'+id+'-country').html(updatecountry);
	});
}