	/*jshint esnext: true */
	/*jshint devel: true */
	/*jshint node: true */
	/*jshint browser: true */
	/*jshint jquery: true */


	function switchMenu(clickedId) {
		console.log(clickedId+" megnyomva...");
	$(".content").css('display', 'none');
	$("#"+clickedId+".content").css('display', 'unset');

	$(".menu-item").removeClass("btn-primary");

	$("#"+clickedId+".menu-item").removeClass("btn-secondary");
	$("#"+clickedId+".menu-item").addClass("btn-primary");
	}
function getToday() {
	let now = new Date();
	//let testDate = new Date("January 23, 2014 11:13:00");
	let day = ('0' + now.getDate()).slice(-2);

	let month = ('0' + (now.getMonth() + 1)).slice(-2);
	let today = now.getFullYear()+"."+(month)+"."+(day);
	return today;
}

function addMunkanap() { 
	let lastid = parseInt($(' .new_munkanap:last').attr('id'));

	console.log("lastid: "+lastid);
	if(isNaN(lastid)) {
		lastid=0;
	}
	mainap = getToday();

	$('#munkanapItems').append(`
		   <div id="`+(lastid+1)+`" class="new_munkanap row">
          <button id="`+(lastid+1)+`" class="remove btn btn-danger" onclick="removeMunkanap(this.id)">-</button>
          <div class="col-xs-6 col-sm-12">
            <input id="`+(lastid+1)+`" type="text" placeholder="dátum" class="datepicker datum_mezo form-control" value="`+mainap+`" >
          </div>
          <div class="col-xs-6 col-sm-12">
            <input id="`+(lastid+1)+`" type="number" min="0.5" max="12" step="0.5" class="munkaora form-control" placeholder="munkaóra">
          </div>
          <div class="col-xs-12 col-sm-12">
            <textarea id="`+(lastid+1)+`" rows="3" class="form-control" placeholder="megjegyzés"></textarea>
          </div>
        </div>

		`);

	$('.datepicker').datepicker({
		language: 'hu',
		autoclose: 'true',
		todayBtn: 'true',
		todayHighlight: 'true'


	});



}	//add munkanap vége


let new_munkanap = [];
function collectMunkanaps() {
	console.log("munkanapok összegyűjtése......");
}


function removeMunkanap(munkanapToRemove) {
	$("#"+munkanapToRemove+".new_munkanap").remove();
	


}

function sendform() {
	//TODO összegyűjteni
	console.log("sending form....");
	collectMunkanaps();
}

$(document).on('blur', '.munkaora' , function() {
//amit ide írunk kod az akkor fut le ha a munkaora mezőt elhagyja a user
	munkaoraMezo = parseFloat($(this).val());
	console.log("a munkaora mezo erteke: "+munkaoraMezo);
	console.log("a munkaora mezo tipusa: "+typeof(munkaoraMezo));
	if ( Number.isFinite(munkaoraMezo) ) {
	if	( munkaoraMezo > 8 ) {
	$(this).val('8');
		
	} else if( munkaoraMezo < 0){
		$(this).val('0');
	}
} else {
	$(this).val('0');
}



});



$(document).ready(function () {

	addMunkanap();
});


//firefoxfix
$(function(){
	$("input[type='number']").on("click", function(){
		$(this).focus();	
	});
});












