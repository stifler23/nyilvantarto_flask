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


function addMunkanap() {
	$('#munkanapItems').append(`
		<div>Hello</div>

		`);
}