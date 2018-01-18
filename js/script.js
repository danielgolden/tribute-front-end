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

	$('.authentication-email').focus(function() {
		$('.authentication-phone').addClass('disabled');
		// $('.authentication-phone').prop('readonly',true);
	});

	$('.authentication-phone').focus(function() {
		$('.authentication-email').addClass('disabled');
		// $('.authentication-email').prop('readonly',true);
	});

	$('.authentication-email').blur(function() {
		if($(this).val().length == 0) {
			$('.authentication-phone').removeClass('disabled');
			// $('.authentication-phone').prop('readonly', false);
		}
	});

	$('.authentication-phone').blur(function() {
		if($(this).val().length == 0) {
			$('.authentication-email').removeClass('disabled');
			// $('.authentication-email').prop('readonly', false);
		}
	});

	$('.authentication-form-step-1 .authentication-continue').click(function(e) {
		e.preventDefault();
		$('.authentication-container').addClass('loading');
		
		setTimeout(function() {
			$('.authentication-container').removeClass('loading');
			$('.authentication-container').addClass('step-2-active');
		}, 1500);
	})

	$('.authentication-form-step-2 .authentication-continue').click(function(e) {
		e.preventDefault();
		$('body').removeClass('authenticating');
	})
});
