function getAverageWordLength(letters) {
	// join letters together creating a string
	// divide the total length by the number of letters
	// to get average
  var totalLength = letters.join("").length;
  return (totalLength / letters.length).toFixed(2);
}

function countDistinctWords(letters) {
	// empty array of distinct words.
	var distinctWords = [];
	// iterations occur checking for repetition and distinct words are added to list.
	for (var i=0; i<letters.length; i++) {
		if (distinctWords.indexof(letters[i]) === -1) {
			distinctWords.push(letters[i]);
		}
	}

	return distinctWords.length;
}

// standardizing text by removing punctuation, changing all text to lowerCase
// therefore making inputs consistent.
function standardizeText(text) {
	return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

function reportOnText(text) {
	var letters = standardizeText(text);
	var numDistinctWords = countDistinctWords(letters);
	var numTotalWords = letters.length;
	var averageWordLength = getAverageWordLength(letters);

// diplay data on DOM.
	var textReport = $('.js-text-report');
	textReport.find('.js-word-count').text(numTotalWords);
	textReport.find('.js-unique-word-count').text(numDistinctWords);
	textReport.find('.js-average-word-length').text(
		averageWordLength + " characters");
	textReport.removeClass('hidden');
}

// watch for and handle form submissions
function watchFormSubmission() {
	$('.js-text-form').submit(function(event) {
		event.preventDefault();
		// get user submitted text
		var userText = $(this).find('#user-text').val();
		reportOnText(removeReturns(userText));
	});
}

$(function() {
	watchFormSubmission();
});


