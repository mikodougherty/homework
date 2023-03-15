
// ToDo
// When the user submits the search form, make an API request to Giphy's search endpoint
// https://api.giphy.com/v1/gifs/search?api_key="YOURAPIKEY"&q="SEARCHSTRING"
// Display the results in the #giphy-results div provided in the html
// Each new search should replace the previous search results
// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout

const apiKey = "kC8i69Es6JiAehhwtN1D8XGvKSzsMvuQ";

async function giphySearch(e) {

  // prevent the page from submitting/reloading
  e.preventDefault();

  // get the user input from the form
  let searchTerm = document.querySelector('input[name="search-term"]').value;

  // make an API call using fetch() - include your API key and the user's search term (template strings are your friend)
  let theURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchTerm;

  const response = await fetch(theURL);

  // convert your response data into .json()
  const giphyData = await response.json();
  

  // print your data to the console to see its format, dont forget to delete later

  // clear out all gifs from previous searches
  document.querySelector("#giphy-results").innerHTML = "";

  // use a loop to create and append each image to the dom
  for(let i=0; i < giphyData.data.length; i++){
    const newImageTag = document.createElement("img");
    newImageTag.setAttribute("src", giphyData.data[i].images.fixed_width.url);
    document.getElementById("giphy-results").append(newImageTag);
    newImageTag.setAttribute("alt", giphyData.data[i].title);
    document.getElementById("giphy-results").append(newImageTag);
  }

}

// dont forget your event listener

document.querySelector("#search-form").addEventListener('submit', giphySearch);