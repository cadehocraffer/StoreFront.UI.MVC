/// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
//  XML reference gives us intellisense for jQuery

jQuery(document).ready(function () {
    console.log("Hello World");
});

//This coe works the same, this is best practice
$(function () {
    //This code executes after all HTML and CSS has loaded
    console.log("Hello World 2");
    $("#myHighlights").hide().fadeIn(3000);

    $("#myHighlights li:last-child").addClass("text-danger");

    let $jQueryVar = $("#myHighlights li:last-child");
    $jQueryVar.text("<em>New Text</em>");
    $jQueryVar.html("<strong>New Text 2</strong>");

    let $jQueryVar2 = $("#myHighlights li:nth-child(2)");
    $jQueryVar2.html("<em>New Text 2</em>");

    $("#fade").css("cursor", "pointer"); //Makes the element able to be clicked
    $("#fade").next().css("font-style", "italic"); //Grabs the p tag and makes it italics
    $("#fade").on("click", function () { //Executes anonymous function on click
        $(this).next().fadeToggle(); //References to #fade and enables a fade on click
    })

    $("#slide").css("cursor", "pointer");    
    $("#slide").on("click", function () {
        $(this).next().slideToggle();
    });

    $(".thumb").on("click", function () {
        var imgSource = $(this).attr("src");
        console.log("imgSource: " + imgSource);
        var imgString = "<img src='" + imgSource + "' class='img-responsive' />"
        console.log("imgString: " + imgString);
        $("#lightbox-content").html(imgString);
        $("#lightbox-container").fadeIn(500);
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
        });
    });
});