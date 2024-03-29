// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

function currency()
{
    var http = new XMLHttpRequest();
    const url = 'http://www.apilayer.net/api/live?access_key=221bbe0f63e9023b713b92cdc55ead79&';
    http.open("GET", url);
    http.send();

    http.onreadystatechange = (e) => {
        var response = http.responseText;
        var responseJSON = JSON.parse(response);

        console.log(responseJSON);

        var value = responseJSON.quotes.USDEUR;
        
        document.getElementById('currency').innerHTML = "Current USD to EUR rate is " + value;
        
    }
}

function conversion()
{
    var http = new XMLHttpRequest();
    const url = 'http://www.apilayer.net/api/live?access_key=221bbe0f63e9023b713b92cdc55ead79&';
    http.open("GET", url);
    http.send();

    http.onreadystatechange = (e) => {
        var response = http.responseText;
        var responseJSON = JSON.parse(response);

        console.log(responseJSON);

        var value = responseJSON.quotes.USDEUR;
        
        var a = document.getElementById('a').value;
    
        var result = a*value;
        document.getElementById('conversion').innerHTML = "Your converted rate in Euro is " + result;   

    }
    
    
}

function EURconversion()
{
    var http = new XMLHttpRequest();
    const url = 'http://www.apilayer.net/api/live?access_key=221bbe0f63e9023b713b92cdc55ead79&';
    http.open("GET", url);
    http.send();

    http.onreadystatechange = (e) => {
        var response = http.responseText;
        var responseJSON = JSON.parse(response);

        console.log(responseJSON);

        var value = responseJSON.quotes.USDEUR;
        
        var a = document.getElementById('a').value;
    
        var result = a/value;
        document.getElementById('conversion').innerHTML = "Your converted rate in Dollars is " + result;   

    }
    
    
}