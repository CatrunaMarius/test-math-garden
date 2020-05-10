
var answer;
var score = 0;
var  backgroundImage = [];

function nextQuestion() {
    const n1 = Math.floor( Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;
    const n2 = Math.floor( Math.random() * 6);
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer() {

    const prediction = predictImage();
    console.log(`answer: ${answer}, prediction: ${prediction}`);
    
    if (prediction == answer){
        score++;
        console.log(`Correct! ${score}`);
        if (score <= 6){
            backgroundImage.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImage;

        }
        else{
            alert('Wel done You leven up')
            score = 0;
            backgroundImage = [];
            document.body.style.backgroundImage = backgroundImage;
        }
       
        
    }
    else{
        if ( score != 0){score--;}
        console.log(`Incorect ${score}`);
        alert(`Oops Check clacuations`)
        setTimeout(function() {
            backgroundImage.pop();
            document.body.style.backgroundImage = backgroundImage;
        }, 1000)
        
    }
    
}