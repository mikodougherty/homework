
// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "bed0f9551513f83edb8c35f9445232d7";

async function handleWeatherRequest(e) {
  
  e.preventDefault();

  // get user input value from textbox
  let cityRequest = document.querySelector("input[name='city']").value;


  // build the url address with YOUR personal API key and the users input city
  let theURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityRequest+"&APPID="+myApiKey;

  
  // make an API call using fetch() and capture the response in a variable
  const response = await fetch(theURL);

  // convert the response to a readable json format with .json()
  const data = await response.json();
  
  // print your data to the console to see its format, dont forget to delete later
  console.log(data);

  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C

  let listOfListItems = "";

  listOfListItems += "<li>The temperature in "+data.name+" is currently "+temperatureConverter(data.main.temp)+"°</li>";


  document.querySelector('#weather-results').innerHTML = listOfListItems;
  
  // build the icon src
  
  // create icon img tag
  
  // add icon url as src
  
  // clear out previous icon img
  
  // print all results to dom
  
  // append icon img to dom
  
}

function temperatureConverter(valnum){

  // Ensure that we are using a number as the input
  valnum = parseFloat(valnum);

  // Perform math to turn K to F
  let outputDeg = 1.8 * (valnum-273)+32

  outputDeg = Math.round(outputDeg);

  // Return deg F
  return outputDeg;

}

// Attach an event listener to the submit button
document.querySelector('#weather-search').addEventListener('submit',handleWeatherRequest);