function selectPet(petType){

    // Get the specific pet data set
    let thePet = petData[petType];

    console.log(thePet);

    // Set the title
    document.querySelector('.petDisplayName').innerText = thePet['displayName'];

    let petSpecs = "";
    // Add the space required, size, weight
        petSpecs += "<dt>Size</dt><dd>";
        petSpecs += thePet.size;
        petSpecs += "</dd>";

        petSpecs += "<dt>Weight</dt><dd>"+ thePet.weight  +"</dd>";

        petSpecs += "<dt>Space Required</dt><dd>"+ thePet.spaceRequired  +"</dd>";

    // Add logic to add the trainability and lap size images

    petSpecs += "<dt>Trainable</dt><dd>";
    if(thePet.trainability == true){
        petSpecs += "<img src='img/200px-Gnome-emblem-default.svg.png' alt='Trainable' class='checkmark'>";
    }else{
        petSpecs += "<img src='img/200px-Gnome-emblem-unreadable.svg.png' alt='Not Trainable' class='checkmark'>";
    }
    petSpecs += "</dd>";

    petSpecs += "<dt>Fits on Lap</dt><dd>";
    if(thePet.fitsOnLap == true){
        petSpecs += "<img src='img/200px-Gnome-emblem-default.svg.png' alt='Lap friendly' class='checkmark'>";
    }else{
        petSpecs += "<img src='img/200px-Gnome-emblem-unreadable.svg.png' alt='Does not fit' class='checkmark'>";
    }
    
    petSpecs += "</dd>";

    // Add the foods (may require loop)
    petSpecs += "<dt>Foods</dt><dd><ul>"

        // for(let oneFood of thePet.foods){
        //     petSpecs += "<li>" + oneFood + "</li>";
        // }

        for(let i=0; i<thePet.foods.length; i++){
            petSpecs += "<li>" + thePet.foods[i] + "</li>";
        }

    petSpecs += "</ul></dd>";

    document.querySelector('.petsDataSpecs').innerHTML = petSpecs;


    // Update the images

        let thumbs = "";

        for(let i=0; i < thePet.images.length; i++){

            thumbs += '<a href="' + thePet.images[i]['img'] + '"><img class="photoThumb" alt="' + thePet.images[i]['alt'] + '" src="' + thePet.images[i]['thumb'] + '"/></a>';

        }

        document.querySelector('.thumbHaus').innerHTML = thumbs;

        document.querySelector('.photoLarge').setAttribute('alt',thePet.images[0]['alt']);

        document.querySelector('.photoLarge').setAttribute('src',thePet.images[0]['img']);

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)

        let allThumbs = document.querySelectorAll('.thumbHaus a');
        console.log(allThumbs);

        for(let i=0; i < allThumbs.length; i++){
            
            allThumbs[i].addEventListener('click',function(e){

                // 
                e.preventDefault();

                // Get the alt
                let newAlt = allThumbs[i].querySelector('img').getAttribute('alt');

                // Get the big image
                let newSrc = allThumbs[i].getAttribute('href');

                // Set big image
                document.querySelector('.photoLarge').setAttribute('src',newSrc);

                // Set big image alt
                document.querySelector('.photoLarge').setAttribute('alt',newAlt);
            });
        }

    // Insert the ideal for
        let ideal = "";

        for(let i=0; i < thePet.idealOwner.length; i++){
            ideal += "<li>"+thePet.idealOwner[i]+"</li>";
        }


        document.querySelector('.idealFor').innerHTML = ideal;


    // Add the adoption groups
        let adoption = "";
        let sampleVar = "MORE Text";
        let anotherVar = "Glorious Text";

        for(let i=0; i < thePet.adoption.length; i++){
            // adoption += '<li><a href="' + thePet.adoption[i].url + '">' + thePet.adoption[i].name + '</a></li>';

            adoption += '<li><a href="' + thePet.adoption[i].url  +'">' + thePet.adoption[i].name + '</a></li>';

        }

        document.querySelector('.adoptionGroups').innerHTML = adoption;


}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");

    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener("change",function(){
        let selectedPet = document.querySelector('#petType').value;

        //let selectedPet = this.value;

        selectPet(selectedPet)
    });
});