document.addEventListener('DOMContentLoaded', ()  => {

var walls = document.getElementsByClassName('boundary');
// for (let i = 0 ; i < lose.length-1 ; i++) {
//     lose.add
// }
// walls.addEventListener('')
// console.log(lose)
var end_button = document.getElementById('end')
var start_button = document.getElementById('start')
var text = document.getElementById('status')

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
}

function youWin(){
    text.innerHTML = "You Won";
}


})




