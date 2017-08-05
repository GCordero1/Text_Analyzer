//main function
$(document).ready(function(){

// word count function
  function wordCount(text) {
    var words = text.trim().split(" ");
    var count = words.length; 
    console.log(count);
    $('.js-word-count').text(count);
  }

// average word length function 
    function averageWordLength(text) {
    var words = text.trim().split(" ");
    var totalWords = words.length;
    var str = words.join("").length;

    var averageWord = str/totalWords ; 
    $('.js-average-word-length').text(averageWord);
  }

// unique word count function
  function uniqueWordCount(text) {
    var unique =[];
    var words = text.trim().split(" ");
    for (i = 0; i < words.length; i++){
      if (unique.indexOf(words[i]) === -1) {
        unique.push(words[i]);
      }
    }
    var uniqueCount = unique.length ; 
    $('.js-unique-word-count').text(uniqueCount);
  }


    $('.form').submit(function(event) {
    event.preventDefault();
    var user_text = $('.form :input').val();
    wordCount(user_text);
    uniqueWordCount(user_text);
    averageWordLength(user_text);
    $('.text-report').removeClass('hidden');
  });
