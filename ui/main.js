console.log('Loaded!');

//change the text of the main-text division.

var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//move the image.
var img = document.getElementById('madi');
img.onclick = function() {
    img.style.margintop = '100px';
};