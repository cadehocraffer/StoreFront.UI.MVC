function validateForm(event) {
    //Gather all HTML controls into a collection instead of creating a separate variable for each form-control
    let myControls = document.getElementsByClassName("form-control");
    console.log("myControls: " + myControls);

    //Regular Expression Object for the uName
    let rxpName = new RegExp(/^[A-Z]+$/i); //This is a RegEx pattern for alpha characters only and no spaces
    let rxpEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/); //This is a RegEx pattern for valid emails

    //A variable output message holder for all input or form elements
    let validationMessages = document.getElementsByClassName("invalid");

    //Check the length of the controls to make sure if any of them have not been filled out - if so, we will stop the form from being submitted
    if (myControls['myName'].value.length == 0 || !rxpName.test(myControls['myName'].value) || rxpName.test(myControls['myEmail'].value)) {
        //Halt evyerthing because the Name is blank or does not match the RegEx
        //The event object that was passed in has a property to prevent the form from being submitted
        event.preventDefault();

        //NAME VALIDATION -------------------------------------------------------
        if (myControls['myName'].value.length == 0) {
            //return a message to user
            validationMessages["rName"].textContent = "* Name is Required";
        } else {
            //Clear any previous message to the user
            validationMessages["rName"].textContent = "";
        }
        //Lets check for invalid regEx on the name field
        if (!rxpName.test(myControls['myName'].value) && myControls['myName'].value.length > 0) {
            validationMessages["rName"].textContent = "* Only Alpha Characters (No Numbers or Spaces)";
        }

        //EMAIL VALIDATION -----------------------------------------------------
        if (myControls['myEmail'].value.length == 0) {
            //return a message to user
            validationMessages["rEmail"].textContent = "* Email is Required";
        } else {
            //Clear any previous message to the user
            validationMessages["rEmail"].textContent = "";
        }
        //Lets check for invalid regEx on the name field
        if (!rxpEmail.test(myControls['myEmail'].value) && myControls['myEmail'].value.length > 0) {
            validationMessages["rEmail"].textContent = "* Enter a Valid Email Address (Including @ and domain)";
        }

        //---------------------------------------------------------------------
        //DEADCODE - Does Nothing, remove at later date.
        //The user entered their name correctly (Got rid of ! on the rxpName)
        //if (rxpName.test(myControls['myName'].value) && myControls['myName'].value.length > 0) {
        //    validationMessages["rName"].textContent = "";
        //    console.log("I am here");
        //}
    } else {
        validationMessages["rName"].textContent = "";
    }
    console.log("All is Good.");
}