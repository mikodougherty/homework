
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);
 
     // Add comparison logic

     // if a is greater than b
    if(a > b) {
      comparison= ">";
    }

    // if b is greater than a
    if(b > a) {
      comparison="<";
    }

    //if they are equal
    if (a === b) {
      comparison="=";
    }

    // if either isn't a number
    if (isNaN(a) || isNaN(b)) {
      comparison="N/A";
    }
 
     document.querySelector('#comparison').innerText = comparison;
   };
 