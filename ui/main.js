// Counter Code

var button = document.getElementById('counter');

button.onclick = function(){
    // Create a request
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            // if request successful
            if(request.status === 200){
                // Render the response in the correct span
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // Not yet done
    };
    
    // Make a request
    request.open('GET','http://latika2016.imad.hasura-app.io/counter',true);
    request.send(null);
};

// Adding names dynamically
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    var list_len = list.length;
    for(var i = 0; i < list_len; i++){
        list = '<li>'+names[i]+'</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};

