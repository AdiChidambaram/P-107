camera = document.getElementById("Take");
Webcam.attach('#Take');

Webcam.set({
    width:200,
    height:200,
    image_format:'png',
    png_quality:90


});

camera = document.getElementById("Take");
Webcam.attach('#Take');

function take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("Captured").innerHTML = '<img id = "captured_image" src = "' + data_uri + '"/>';

    });
}

console.log('ml5 version: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NDOvHVnVk/model.json',modelLoaded);

