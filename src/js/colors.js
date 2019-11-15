var colors = ['black', 'SlateGrey ', 'grey', 'lightgrey', 'white', 'LightGoldenRodYellow', 'yellow', 'gold', 'brown', 'darkred', 'red', 'tomato', 'orange', 'lightgreen', 'green', 'teal', 'LightSkyBlue', 'blue', 'Navy', 'indigo', 'violet', 'Orchid', 'Purple', 'MediumVioletRed ', 'pink'];
var customColor = document.querySelector('input[type="color"]');
var customLabel = document.getElementById('customLabel');

for(var i = 0, n = colors.length; i < n; i++) {
    var swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = colors[i];
    swatch.addEventListener('click', setSwatch, false);
    document.getElementById('colors').appendChild(swatch);
}

function setColor(color) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    var active = document.getElementsByClassName('active')[0];
    if(active) {
        active.className = 'swatch';
    }
}

function setSwatch(e) {
    //identify swatch
    var swatch = e.target;
    //set color
    setColor(swatch.style.backgroundColor);
    //give active class
    swatch.className += ' active';
}

function setCustomColor(e) {
    var color = e.target.value;
    customColor.setAttribute("value", color);
    customLabel.style.backgroundColor = color;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
}

function setActive() {
    var active = document.getElementsByClassName('active')[0];
    if(active) {
        active.className = 'swatch';
    }
    customLabel.className += ' active';

}

customColor.addEventListener('change', setCustomColor, false);
customColor.addEventListener('input', setCustomColor, false);
customLabel.addEventListener('click', setActive, false);

setSwatch({target: document.getElementsByClassName('swatch')[1]});