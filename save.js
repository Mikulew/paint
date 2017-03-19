var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage, false);

function saveImage() {
    var data = canvas.toDataURL();
    //     var xhr = new XMLHttpRequest();
    //
    // request.onreadystatechange = function() {
    //     if(request.readyState == 4 && request.status == 200) {
    //         var response = request.responseText;
    //         window.open('download.php?file='+response, '_blank', 'location=0, menubar=0');
    //     }
    // };
    //
    // xhr.open('POST', 'save.php', true);
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.send('img=' + data);
    window.open(data, '_blank', 'location=0, menubar=0');
}