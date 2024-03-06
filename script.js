let boxes = document.querySelectorAll(".box");
let reset_btn= document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true//player x player y

const winPatterns=[
    [0,1,2]
    ,[3,4,5]
    ,[6,7,8]
    ,[0,3,6]
    ,[1,4,7]
    ,[2,5,8]
    ,[0,4,8]
    ,[2,4,6]
];
const resetGame = () => {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = ()=> {
    for(let box of boxes ){
        box.disabled=false;
        box.innerText="";

    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked ");
        if(turnO===true){
        box.innerText= "O";
        turnO=false;
        }
        else {
        box.innerText="X";
        turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const showWinner = (Winner) => {
   msg.innerText = `Congratulations ,${Winner} is the Winner .`;
   msg-msgContainer.classList.remove("hide");
   disableBoxes();
}
const checkWinner = ()=>{
    for(pattern of winPatterns){
        let val1=  boxes[pattern[0]].innerText;
        let val2= boxes[pattern[1]].innerText;
        let val3=  boxes[pattern[2]].innerText;
          
        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2 ==val3){
                console.log("Winner",val1);
                showWinner(val1);
            }
        }
    }

}
newGamebtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);