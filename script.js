

var loadCityInfo = function(response){


	console.log(response);


	//add an error catch before setting variables
	if(response.response.error){
		alert(response.response.error.description);
		return;
	};


	//set variables to elements of your response object
	var thisCity = name;
	var capitalCity = capital;
	var currency = currencies.name;
	var callingCode = callingCodes;
	var flag = flag;


	//set text of HTML elements to your variables
	$('.capital-city').html(capitalCity);
	$('.currency').html(currency);
	$('.calling-code').html(callingCode);
	$('flag').css('<img src="' + flag + '">');

	//set value of city input to response city.
	$('chosenCountry').val(thisCity);
};




var setLocation = function(){
	//set the global variable 'city' to the value of .chosenCountry
	country = $('.chosenCountry').val()


	//if the city is null or it equals '', alert the user and
	//stop running the function.
	if(country == null || country == " "){
		alert('You need to type a city!');
		return;
	};

	console.log('You want info about ' + country);

	//call getCityInfo() function now that city is set
	getCityInfo();
};




var getCityInfo = function(){

	var myUrl = 'http://restcountries.eu/rest/v2/name/' + country ;
	console.log(country);
	//run the ajax call and load city info on success
// $.ajax({
// 	url : myUrl,
// 	dataType : "jsonp",
// 	success : function(response) {
// 		loadCityInfo(response);
// 		console.dir(response);
// 		console.log('success');
// 	}
// });

var settings = {
  "async": true,
  "crossDomain": true,
  "url": myUrl,
  "method": "GET",
  "headers": {
  }
}

$.ajax(settings).done(function (response) {
	console.dir(response);
	console.log('country ' + response[0].capital);
	console.log('currency ' + response[0].currencies[0].code);
	console.log('calling code ' + response[0].callingCodes[0])
	$('.capital-city').html(response[0].capital);
	$('.currency').html(response[0].currencies[0].code);
	$('.calling-code').html(response[0].callingCodes[0]);
	// $('.flag').html(response[0].flag[0]);
	// $('flag').css("background-image: url("response[0].flag[0]")")(response[0].flag[0]);

});

};




//initialize function
var init = function(){


	console.log('Give me info about this city!');


//Submit input and set the location
	$('#submit').click(function(e){
		e.preventDefault();
		setLocation();
	});
};




//document load listener
$( document ).ready(function() {
    init(); //call init() function when the page loads
});






