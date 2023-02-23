document.addEventListener('DOMContentLoaded', ()  => {

var walls = document.getElementsByClassName('boundary');

var end_button = document.getElementById('end')
var start_button = document.getElementById('start')
var text = document.getElementById('status')
var score = document.getElementsByClassName('example')[0]
score_calculation = 0
start_button.addEventListener('mouseover', start)

function start(){
for (var i = 0 ; i < walls.length-1 ; i++) {
     walls[i].addEventListener('mouseover', youLost)
}
end_button.addEventListener('mouseover', youWin)
}

function youLost() {
    text.innerHTML = "You Lost"
    for (var i = 0 ; i < walls.length-1 ; i++){
        walls[i].classList.add('youlose')
    }
    score_calculation -= 15
    score.innerHTML = score_calculation
}

function youWin(){
    text.innerHTML = "You Won";
    score_calculation +=5
    score.innerHTML.style.text-align.center 
    score.innerHTML = score_calculation
}


})




