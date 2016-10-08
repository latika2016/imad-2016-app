// Counter Code

var submit = document.getElementById('submit_btn');

submit.onclick = function(){
    // Create a request
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            // if request successful
            if(request.status === 200){
                // Render the response in the correct span
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                var names_len = names.length;
                for(var i = 0; i < names_len; i++){
                    list += '<li>'+names[i]+'</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
        // Not yet done
    };
    
    // Make a request
    var name = document.getElementById('name').value; 
    request.open('GET','http://latika2016.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
};

// Adding names dynamically
//var submit = document.getElementById('submit_btn');
//var name = document.getElementById('name');
/*submit.onclick = function(){
    var names = request.responseText;
    names = JSON.parse(names);
    var list = '';
    var names_len = names.length;
    for(var i = 0; i < names_len; i++){
        list += '<li>'+names[i]+'</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};
*/
