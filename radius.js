var minRad = 5,
    maxRad = 100,
    defaultRad = 10,
    interval = 5,
    radSpan = document.getElementById('radval'),
    decRad = document.getElementById('decrad'),
    incRad = document.getElementById('incrad');

var setRadius = function(newRadius) {
    if (newRadius < minRad || newRadius == undefined) {
        newRadius = minRad;
    } else if (newRadius > maxRad) {
        newRadius = maxRad;
    }
    radius = newRadius;
    ctx.lineWidth = radius*2;
    radSpan.innerHTML = radius;
};

decRad.addEventListener('click', function() {
    setRadius(radius-interval);
}, false);

incRad.addEventListener('click', function() {
    setRadius(radius+interval);
}, false);

setRadius(defaultRad);