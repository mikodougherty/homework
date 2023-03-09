function validateSignInForm(e){
    e.preventDefault();

    // Set up message array
    let messages = new Array;

    // Get password and validate
    let password=document.getElementById('inputPassword3').value;
    if(password.length < 3){
        messages.push("Password is less than 3 characters");
    }

    // Get email address and validate
    let email = document.getElementById('inputEmail3');
    console.log(ValidateEmail(email))
    if(!ValidateEmail(email)){
        messages.push("Please enter a valid email.")
    }

    // If no error messages show submit message
    let outputMessage = "";
    if(messages.length == 0){
        outputMessage = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
    }else{
    // Else show error messages
        outputMessage = '<div class="alert alert-danger" role="alert">';
        for(let i=0;i<messages.length;i++){
            outputMessage+='<p>'+messages[i]+"</p>";
        }
        outputMessage+="</div>";
    }

    document.getElementById('errorMessages').innerHTML = outputMessage;

}

function validateNewUserForm(e){
    e.preventDefault();

    // Set up message array
    let messages = [];

    // Get email address and validate
    let email = document.getElementById('inputEmail').value;
    if(ValidateEmail(email) == true){
        messages.push("Email not valid")
    }



    // Get passwords and validate
        // Make sure that both passwords match
        let newPassword = document.getElementById('inputPassword5').value;
        let newPasswordCucumber = document.getElementById('inputPassword4').value;

        if(newPassword.length < 3 || newPasswordCucumber.length < 3){
            messages.push("Password too short")
        }

        if(newPassword != newPasswordCucumber){
            messages.push('Passwords do not match')
        }
        
    // Validate Names
        let fname = document.getElementById('inputFName').value;
        if(fname.length < 3){
            messages.push("Invalid first name");
        }

        let lname = document.getElementById('inputLName').value;
        if(lname.length < 3){
            messages.push("Invalid last name")
        }

     // If no error messages show submit message
     let outputMessage = "";
     if(messages.length == 0){
         outputMessage = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
     }else{
     // Else show error messages
         outputMessage = '<div class="alert alert-danger" role="alert">';
         for(let i=0;i<messages.length;i++){
             outputMessage+='<p>'+messages[i]+"</p>";
         }
         outputMessage+="</div>";
     }
 
     document.getElementById('errorMessages').innerHTML = outputMessage;
}




function ValidateEmail(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }else{
    return false;
  }
}




document.addEventListener('DOMContentLoaded', function(event) {

    jQuery('#relaxrExistingUser a').click(function (e) {
        e.preventDefault()
        jQuery(this).tab('show')
    });

    // Bind a validation function to the submit of the login form
    document.querySelector("#home .relaxrLoginForm").addEventListener('submit',validateSignInForm);

    // Bind a validation function to the submit of the profile
    document.querySelector("#profile .relaxrLoginForm").addEventListener('submit',validateNewUserForm);
});