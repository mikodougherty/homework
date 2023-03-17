// http://www.omdbapi.com/?i=tt3896198&apikey=1dd13812

let data = null

// Target the results
let results = document.querySelector("#results")

let inputField = document.querySelector("#seachField")

let apiKey = "1dd13812";

function cardRepeat(title, poster, year, type, element, index){

    // There is a sample of the snipped in the html as a comment
    let snippet = `<div class="col-md-4"><div class="card text-white card-has-bg click-col result-card" id=${index} style="background-image:url('${poster}');">
    <img class="card-img d-none" src="${poster}" alt="${title}">
    <div class="card-img-overlay d-flex flex-column">
    <div class="card-body">
       <small class="card-meta mb-2">${year}</small>
       <h4 class="card-title mt-0 text-white ">${title}</h4>
     </div>
     <div class="card-footer">
      <div class="media">
        <h3 class="hiddenClick">Clicked</h3>
    <div class="media-body">
    <small>${type}</small>
    </div>
    </div>
     </div>
    </div>
    </div>
    </div>`;
    element.innerHTML += snippet
}




document.querySelector("#searchMovies").addEventListener("click", async function(e){
    
    // Stop the default behavior
    e.preventDefault();

    // Make the results an empty Div
    document.getElementById("results").innerHTML = "";

    // Insert GET function to retrieve a list of movies
    let searchURL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${inputField.value}`;
   
    let response = await fetch(searchURL);
    
    // Format the results as JSON
    data = await response.json();

    console.log(data);


    // Loop through your data and use the cardRepeat() function to add a new movie to the displayed list.
    for(let i=0; i < data.Search.length; i++){
        console.log(i);
        console.log(data.Search[i]);
        cardRepeat(
            data.Search[i].Title, 
            data.Search[i].Poster, 
            data.Search[i].Year, 
            data.Search[i].Type, 
            results, 
            data.Search[i].imdbID
            );
    }

        // Loop through the newly created cards

        
        // Create a click event for each card
        
           
            // insert post function to submit the ID of the card clicked

                // Create request options for a POST method
            
                // Run the post and wait for the answer
            

            // shows what has been clicked on by setting the .hiddenClick item to have a display of block
            
        

})