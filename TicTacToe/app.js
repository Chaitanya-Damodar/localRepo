let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGame = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true;

let winPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}


boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText = 'O';
            turn0 = false;
        }else{
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;

        let winner = checkWinner(); //to check draw condition
    })
})


const disableBoxes = () => {
    for(let box of boxes)
        box.disabled = true;
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}


const checkWinner = () =>{
    for(let pattern of winPattern){
        let pat1 = boxes[pattern[0]].innerText;
        let pat2 = boxes[pattern[1]].innerText;
        let pat3 = boxes[pattern[2]].innerText;
    
    if(pat1 !='' && pat2 != '' && pat3 !=''){
        if(pat1 === pat2 && pat2 === pat3){
            showWinner(pat1);
            return true;
        }
    }
    }
}

newGame.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);