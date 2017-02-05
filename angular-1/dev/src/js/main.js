// Authors: %Author Name%

$(function() {


  if ($('html').hasClass('-device_desktop')) {

  }
  initFormStyler();
});
$(window).on('resize', function() {

});
$(window).on('load', function() {

});

function initFormStyler() {
	$('select').styler({ //, input:radio, input:checkbox
		filePlaceholder: 'Select a file',
		fileBrowse: 'Browse',
		fileNumber: '%s files are selected',
		selectPlaceholder: '',
		selectSearchNotFound: 'Not found',
		selectSearchPlaceholder: 'Search..'
	}).trigger('refresh');
}

