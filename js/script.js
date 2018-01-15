var yearList = document.getElementsByClassName('years')[0];
var currentYear = document.getElementsByClassName('active-year')[0];
var yearOption = document.getElementsByClassName('year')[0];

$(function() {
	window.addEventListener('click', function(e){ 
		if ($(yearList).hasClass('active')) {
			if (yearList.contains(e.target) || currentYear.contains(e.target)){
				// nothing
			} else{
				$(yearList).removeClass('active');
			}
		}
	});

	$(currentYear).click(function() {
		$(yearList).addClass('active');

	});

	$('.year').click(function(e) {
		$(currentYear).text($(this).text());
		$(yearList).removeClass('active');

		if($(this).hasClass('active')) {
			console.log('already has .active class');
		} else {
			console.log('Does NOT have .active class');
			$('.year.active').removeClass('active');
			$(this).addClass('active');
		}
	});
});
