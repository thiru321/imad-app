// Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    // create a request object.
    var request = new  XMLHttpRequest();
    // captue the response and store it in a variable.
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE) {
          // take some action
          if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
          
      }
      // Nt done yet.
    };
    
    // make the request
    request.open('GET',)
    
};