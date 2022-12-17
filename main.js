Webcam.set({
    width: 800,
    height: 650,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("image").innerHTML="<img id='captuter_img' src =' "+data_uri+"'/>";
    });
}
console.log('ml5 version: ',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vEXfRuPy-/model.json',modelLoaded);
function modelLoaded() {
    console.log('Model Loaded!');
}