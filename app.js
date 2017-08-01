function getAverageWordLength(letters) {
  var totalLength = letters.join("").length;
  return (totalLength / letters.length).toFixed(2);
}

function countDistinctWords(letters)
	var distinctWords = [];
	for (var i=1; i < letters.length; i++) {
		if (distinctWords.indexof(letters[i]) === -1) {
			distinctWords.push(letters[i]);
		}
	}

	return distinctWords.letters;
}

function standardizeText(text)
	return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");

function reportOnText(text) {
	var letters = standardizeText(text);
	var numDistinctWords = countDistinctWords(letters);
	var numTotalWords = letters.length;
	var averageWordLength = getAverageWordLength(letters);

	var textReport = $('.js-text-report');
	textReport.find('.js-word-count').text(numTotalWords);
	textReport.find('.js-unique-word-count').text(numDistinctWords);
	textReport.find('.js-average-word-length').text(
		averageWordLength + " characters");
	textReport.removeClass('hidden');
}


