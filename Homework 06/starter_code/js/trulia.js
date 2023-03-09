

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

  document.querySelector(".trulia-nav-toggle").addEventListener('click',function(e){
    e.preventDefault();
    let navSet = document.querySelectorAll('.trulia-nav > nav ul');

    for(let n=0;n<navSet.length;n++){
        navSet[n].classList.toggle('trulia-nav-mobilehide');
    }
  
  });



  for (let i=0; i < truliaCards.length; i++) {

  truliaCards[i].addEventListener('click', function(){
      for (let k=0; k < truliaCards.length; k++) {
        truliaCards[k].classList.remove('trulia-featured-grid-item');
      }
      
      this.classList.add('trulia-featured-grid-item');

  });
  }

});  



