$("button").on("click", function() {
      var searchTopic = $(this).attr("data-topic");
      var recordNumber;
      var startYear;
      var endYear;
      var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      url += '?' + $.param({
      	'api-key': "520d37b9792444b2ba211befd835be47",
      	'q': "hurricane",
      	'fq': "5",
      	'begin_date': "20150101",
      	'end_date': "20160101"
      });

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

        console.log(response);

        // Step 2: since the image information is inside of the data key,
        // make a variable named results and set it equal to response.data

        // =============== put step 2 in between these dashes ==================
        var results = response.data;
        // ========================

         for (var i = 0; i < results.length; i++) {

        // Step 3: uncomment the for loop above and the closing curly bracket below.
        // Make a div with jQuery and store it in a variable named animalDiv.
        // Make a paragraph tag with jQuery and store it in a variable named p.
        // Set the inner text of the paragraph to the rating of the image in results[i].
        // Make an image tag with jQuery and store it in a variable named animalImage.
        // Set the image's src to results[i]'s fixed_height.url.
        // Append the p variable to the animalDiv variable.
        // Append the animalImage variable to the animalDiv variable.
        // Prepend the animalDiv variable to the element with an id of gifs-appear-here.

        // ============= put step 3 in between these dashes ======================
        var topicDiv = $("<div class='item'>");

        var article = results[i].article;
        var p = $("<p>").text("Title: " + article);

        topicDiv.append(p);

        // $("#gifs-appear-here").prepend(animalDiv);
        // ==================================
         }

      });
    });

$("#clear").on("click", function() {
	topicDiv.empty();
	var searchTopic = $(this).attr("data-topic");
	var recordNumber;
	var startYear;
	var endYear;
})

