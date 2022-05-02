function startClassification(){
navigator.mediaDevices.getUserMedia({
audio:true
});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/W7k5lFMK4/model.json", modelLoaded);

}

function modelLoaded(){
console.log("model is loaded");
classifier.classify(gotResults);
}

function gotResults(error, results){
if(error){
console.log(error);
}

else(results)
console.log(results);

}