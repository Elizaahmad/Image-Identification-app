Webcam.set({
    height:300,
    width:310,
    image_format:'png',
    png_quality:90,

    constraints:{
        facingMode:"environment"
    }
});
camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>"
    });
}
console.log('ml5.version is:',ml5.version);
classifier=ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResults);
}

function gotResults(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
}
}