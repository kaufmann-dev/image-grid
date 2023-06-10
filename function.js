$(document).ready(function() {
	$('#photos img').click(function() {
		window.open('imgFullRes/' + $(this).attr('src').filename(), '_blank');
	});
	$('#photos img').hover(function() {
		$(this).attr('src', './imgFullRes/' + $(this).attr('src').filename());
	}, function() {
		$(this).attr('src', './imgThumbnail/' + $(this).attr('src').filename());
	});
});