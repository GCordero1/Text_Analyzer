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

