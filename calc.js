//Grab the inputs
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var selector1 = document.getElementById('selector1');
var selector2 = document.getElementById('selector2');
var resultField = document.getElementById('resultField');
var quoteForm = document.getElementById('quoteForm');

//Event lsitner

quoteForm.addEventListener('submit', function(event) {
    //Grab data and create form validation

    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    } else {
    //Convert from string to numbers and grab the values for the input fields and selectors
    var a = parseFloat(numField1.value);
    var b = parseFloat(numField2.value);
    var c = parseFloat(selector1.options[selector1.selectedIndex].value);
    var d = parseFloat(selector2.options[selector1.selectedIndex].value);

    //Do the calculation and put the result into a variable
    var results = a*b*c*d;

    resultField.innerText = `It will cost you: ${results}`;

    //turn off  the default behaviour to stop the page from refreshing
    event.preventDefault();
    
    }
        
});