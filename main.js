const title = document.querySelector('.title'),
      btnStart = document.querySelector('#btnPlay'),
      panelGame = document.querySelector('#panel'),
      btnLess = document.querySelector('#btnLess'),
      btnMore = document.querySelector('#btnMore'),
      currentNum = document.querySelector('#currentNum');

let a = 0,
    b = 1000,
    counter = 0;

btnStart.addEventListener('click', startGame);
btnLess.addEventListener('click', checkLess);
btnMore.addEventListener('click', checkMore);

function startGame(){
    btnStart.classList.add('hidden');
    panelGame.classList.remove('hidden');

    title.innerHTML = parseInt((a + b)/2);
}

function checkLess(){
    b = parseInt((a + b)/2);
    title.innerHTML = parseInt((a + b)/2);

    counterText();
    counterGameEnd();
}

function checkMore(){
    a = parseInt((a + b)/2);
    title.innerHTML = parseInt((a + b)/2);

    counterText();
    counterGameEnd();
}

function counterText(){
    let result = counter + 1;
    currentNum.innerHTML = 10 - result;
}

function counterGameEnd(){
    counter++;
    if (counter >= 10){
        alert('10 попыток истекло, игра окончена!')
        location. reload();
    }
}
