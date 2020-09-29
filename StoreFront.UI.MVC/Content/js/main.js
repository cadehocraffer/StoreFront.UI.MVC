//main.js will be a utility file to help our html pages- sometimes refered to as a "helper file". TIP:  ctrl-e-w will toggle line wrap in VS

//alert() is a method built in to browsers that causes an unstylable popup
//alert("Javascript is Working!");

//variables can change values and data types (remember, JS is NOT type-safe) NOT type safe because I could accidently change the type of the var (in this case from int to string - that can have unexpected results/consequences)
//var x = 10;
//var x = "10";

//LET variable
//  Using "let" achieves mostly the same purpose as var except var has a wider scope whereas let can behave differently base on its scoping//  https://www.javascripttutorial.net/es6/difference-between-var-and-let///let x = 10;//Const variable//const x = 10; //const doesn't allow redeclaring a variable, but you also cannot change the value of a const//console.log(x);//x = 11;//console.log(x);//Create a new instance of the Date object to display for our copyright. We call this new instance object "currentDate"- currentDate is now a copy of the Date object. Remember that JS is an object oriented language- that means objects have properties(nouns) (and methods too- verbs or actions).  In the case below, currentDate as a copy of the Date object has access to the Date object's methods - such as getFullYear(). Create a variable to take only the year from currentDate. Use the value of currentYear as the <span id="copyright"> content in jsintro.html. Create a variable to reference the <span> node from the HTML document. Notice copyright is a true reference to the span node so when we console it out we see the entire span node including its html syntax. To update the content of the span, or any element that takes a value, use the .textContent property. Notice textContent is not followed by() so it is a property and properties can be assigned(=) values
let currentDate = new Date(); //empty constructor that defaults to today's date and time and timezoneconsole.log(currentDate + " -- Current Date");
let currentYear = currentDate.getFullYear();console.log(currentYear + " -- Current Year");
let copyright = document.getElementById("myCopyright");
console.log(myCopyright);
myCopyright.textContent = currentYear;

//JS Arrays are LIFO - Last In First Out. JS arrays do NOT have a set size. Can be accessed like C# - with a 0 based index value
let colorsArray = ['blue', 'brown', 'orange', 'pink', 'red', 'green'];
//To add an item to the array, you use a push()
colorsArray.push("purple");
//To remove the last item added to the array, use the pop()
colorsArray.pop();
let colorSpan = document.getElementById("myColor");
colorSpan.textContent = colorsArray[0];
colorSpan.style.color = colorsArray[0];

//Functions are declared with the 'function' keyword. The code inside of a function will ONLY run when called upon in reaction to an event (button click, keystroke, page load...)
function displayFavoriteColor() {
    let usersFavoriteColor = document.getElementById("usersColor").value;
    let usersMessage = document.getElementById("color-message");
    usersMessage.textContent = usersFavoriteColor + " is my favorite color!";
    usersMessage.style.backgroundColor = usersFavoriteColor;
}

function calculateWeight() {
    let userGallons = document.getElementById("tbNbrGallons").value;
    let userOutput = document.getElementById("water-weight");
    userOutput.textContent = userGallons * 8.33 + " lbs.";
}

//  Syntax is the same as C# for: for, while, do while//  Use a for loop to display 1-10
let loopToTen = document.getElementById("loop-to-ten");
for (var i = 1; i <= 10; i++) {
    loopToTen.innerHTML += i + "<br>";
}

//Function that uses a "switch" to check for milestones based on user's inputted age
function showSingleMilestone() {
    let userAge = document.getElementById("userAge1M").value;
    let outputElement = document.getElementById("single-M");
    switch (userAge) {
        case "13":
            outputElement.innerHTML = "You are now a teenager!";
            break;
        case "18":
            outputElement.innerHTML = "Now you can vote!";
            break;
        case "55":
            outputElement.innerHTML = "You nw get a discount a Denny's!";
            break;
        default:
            outputElement.innerHTML = "You have no milestone";
            break;
    }
}

let eventListenerSingleM = document.getElementById("singleM");
eventListenerSingleM.addEventListener("click", showSingleMilestone);