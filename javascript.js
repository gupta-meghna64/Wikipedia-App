function play() {
	document.getElementById("test").innerHTML = "";
	var submit = document.getElementById('textArticle').value;	
	console.log(submit);


	//console.log(submit);
	//$('Search').click(function() {
		//console.log("aa");
		/* Act on the event */
			$.ajax({
				url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + submit + "&prop=info&inprop=url&utf8=&format=json",
				//type: 'default GET (Other values: POST)',
				dataType: "jsonp",
				success: function(response) {
					for(var i = 0; i < response.query.search.length; i++)
					{
						console.log(response.query.search[i].title);
						document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + "<br>" + "<br>" + "<a href = "+"https://en.wikipedia.org/wiki/" + response.query.search[i].title.replace(/ /g,"_") +">" + response.query.search[i].title + "</a>";
						document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + "<br>" + '<span style='+'"color:green"' + '>'+  "https://en.wikipedia.org/wiki/" + response.query.search[i].title.replace(/ /g,"_") +'</span>' + "<br>";
						document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + response.query.search[i].snippet + "<br>";
						//("test").innerHTML = ("test").innerHTML + "a";
					}
				}
			})
			
			
		

	//});

}

function feeling_lucky() {
	window.open('http://en.wikipedia.org/wiki/Special:Random')
}

$("textArticle").autocomplete({
    source: function(request, response) {
        console.log(request.term);
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                'action': "opensearch",
                'format': "json",
                'search': request.term
            },
            success: function(data) {
                response(data[1]);
            }
        });
    }
});