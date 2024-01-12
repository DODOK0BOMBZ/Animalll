function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bRk3UmAgq/model.json' , modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if (error){
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
         random_number_g = Math.floor(Math.random() * 255) + 1;
         random_number_b = Math.floor(Math.random() * 255) + 1;

         document.getElementById("result_label").innerHTML = 'Posso ouvir: '+
          results[0].label;
           document.getElementById("result_confidence").innerHTML = 'Precisão: '+
            (results[0].confidence*100).toFixed(2)+" %";
            document.getElementById("result_label").style.color = "rgb("
            +random_number_r+","+random_number_g+","+random_number_r+")";
             document.getElementById("result_confidence").style.color = "rgb("
            +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById("animal1")
        img1 = document.getElementById("animal2")
        img2 = document.getElementById("animal3")
        img3 = document.getElementById("animal4")

        if (results[0].label == "Latido") {
            img2.src = 'dog.jpeg';
            
        } else if (results[0].label == "Mugido") {
            img1.src = 'cow.jpeg';
            
        } else if (results[0].label == "Rugido") {
            img3.src = 'lion.jpeg';
           
    } else {
        img.src = 'cat.jpeg';

}
}
}