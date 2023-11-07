const startGame = document.querySelector('.startGame');
const container = document.querySelector(".container");
const section =  document.querySelector("section");
startGame.addEventListener("click", () => {
    startGame.classList.toggle("hidden");
    container.classList.toggle("hilang");
    section.classList.toggle("hidden");
}) 

function getcomputerPicked() {
    const comp = Math.random();
    if(comp < 0.34) return '✊';
    if(comp >= 0.34 && comp <= 0.67) return '✌️';
    return '🖐️';
}

function getResult(comp, player) {
    if(player == comp) return 'Draw';
    if(player == '✊') return (comp == '✌️') ? 'You Win!' : 'You Lose!';
    if(player == '✌️') return (comp == '✊') ? 'You Lose!' : 'You Win!';
    if(player == '🖐️') return (comp == '✊') ? 'You Win!' : 'You Lose!';
}

const pRock = document.querySelector('.rock');
pRock.addEventListener('click', function() {
    const computerPicked = getcomputerPicked();
    const playerPicked = pRock.innerHTML;
    const result = getResult(computerPicked, playerPicked);
    console.log(`player : ${playerPicked}`);
    console.log(`computer : ${computerPicked}`);
    console.log(`Result = ${result}`); 
    
    const computerPick = document.querySelector('.computerPick')
    question = document.querySelector(".question").style.display = 'none' ;

    computerPick.classList = 'item';
    computerPick.innerHTML = computerPicked;
    console.log(computerPick);

});

