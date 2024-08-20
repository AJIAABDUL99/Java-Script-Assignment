//Write a JavaScript function toggleVisibility that toggles the visibility of an HTML element with the id myDiv. When the function is called, it should hide the element if it's
function toggleVisibility() {
    var element = document.getElementById("myDiv");
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
