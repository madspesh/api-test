//global variables
var city = '';



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
	$('flag').html('<img src="' + flag + '">');

	//set value of city input to response city.
	$('chosenCountry').val(thisCity);
};




var setLocation = function(){
	//set the global variable 'city' to the value of .chosenCountry
	city = $('.chosenCountry').val()


	//if the city is null or it equals '', alert the user and
	//stop running the function.
	if(city == null || city == " "){
		alert('You need to type a city!');
		return;
	};

	console.log('You want info about ' + city);

	//call getCityInfo() function now that city is set
	getCityInfo();
};




var getCityInfo = function(){

	var myUrl = 'http://restcountries.eu/rest/v2/name/' + location + '/';

	//run the ajax call and load city info on success
$.ajax({
	url : myUrl,
	dataType : "jsonp",
	success : function(response) {
		loadCityInfo(response);
	}
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






