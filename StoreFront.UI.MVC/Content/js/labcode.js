//let userInput = [foreignCountry, adjective, animal, verb, place, liquid];

function madLib() {
    let userCountry = document.getElementById("foreignCountry").value;
    let userAdjective = document.getElementById("adjective").value;
    let userAnimal = document.getElementById("animal").value;
    let userVerb = document.getElementById("verb").value;
    let userPlace = document.getElementById("place").value;
    let userLiquid = document.getElementById("liquid").value;
    let generatedParagraph = document.getElementById("paragraph");
    generatedParagraph.textContent = "If you are traveling in " + userCountry + " and find yourself having to cross a piranha-filled river, here's how to do it safely. Piranhas are more " + userAdjective + " during the day, so cross the river at night. Avoid areas with netted " + userAnimal + " traps - piranhas may be waiting there looking to " + userVerb + " them! Piranhas are attracted to fresh " + userLiquid + " and will migrate to it as often as possible. Whatever you do, if you have an open wound, try to find another way to get back to the " + userPlace + ".";
}

let loopMultiples7 = document.getElementById("loop-multiples-seven");for (var i = 7; i <= 28; i = i + 7) {    loopMultiples7.innerHTML += i + "<br>";}
