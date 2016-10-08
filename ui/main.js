// Counter Code

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    // Create a request
    
    // Capture the response and store it in a variable
    
    // Make a request
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};

