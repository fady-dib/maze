document.addEventListener('DOMContentLoaded', ()  => {

var walls = document.getElementsByClassName('boundary');
var end_button = document.getElementById('end');
var start_button = document.getElementById('start');
var text = document.getElementById('status');
var score = document.getElementsByClassName('example')[0];
var score_calculation = 0;
start_button.addEventListener('click', restart);
start_button.addEventListener('mouseover', start);
score.style.textAlign = "center";

function start(){
for (var i = 0 ; i < walls.length-1 ; i++) {
     walls[i].addEventListener('mouseover', youLost);
     walls[i].classList.remove('youlose');
}

end_button.addEventListener('mouseover', youWin);

}

function youLost() {
    text.innerHTML = "You Lost";
    for (var i = 0 ; i < walls.length-1 ; i++){
        walls[i].classList.add('youlose');
        walls[i].removeEventListener('mouseover',youLost);
    }
    score_calculation -= 15;
    score.innerHTML = score_calculation;
    end_button.removeEventListener('mouseover', youWin);
    
}

function youWin(){
    text.innerHTML = "You Won";
    score_calculation +=5;
    score.innerHTML = score_calculation;
    end_button.removeEventListener('mouseover',youWin);
    for (var i = 0 ; i < walls.length-1 ; i++){
        walls[i].removeEventListener('mouseover',youLost);
    }
}

function restart(){
    for (var i = 0 ; i < walls.length-1 ; i++){
        walls[i].addEventListener('mouseover',youLost);
        walls[i].classList.remove('youlose');
    }

    end_button.addEventListener('mouseover', youWin);
    score_calculation = 0;
    score.innerHTML = score_calculation;

}


})




