let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turn0 = true;
let win =0;
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
  turn0 = true;
  count =0;
  enablebtn();
  msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
      if(turn0=== true){
        box.innerText ="O";
        box.style.color = 'red';
        turn0=false;
      } else{
        box.innerText ="X";
        box.style.color = "#FCCA46";
        turn0 = true;
      }
      box.disabled = true;
      count++;
      checkwinner();
      checkDraw();
    })
})
const disablebtn = () => {
  for (let box of boxes){
    box.disabled = true;
  };
}
const enablebtn = () => {
  for (let box of boxes){
    box.disabled = false;
    box.innerText= "";
  };

}
const showwinner = ((winner) => {
  msg.innerText = `Conguratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disablebtn();
})
const checkwinner = () => {
    for(pattern of winPatterns){
     let pos1 = boxes[pattern[0]].innerText;
     let pos2= boxes[pattern[1]].innerText;
     let pos3 = boxes[pattern[2]].innerText;
    if(pos1 != "" && pos2 !="" && pos3 != ""){
      if(pos1==pos2 && pos2==pos3 ){
        showwinner(pos1);
      }
    }
}
}
const checkDraw = () => {
  if (count === 9 ) {
    msg.innerText = "It's a draw!";
    msgcontainer.classList.remove("hide");
  }
};
newgamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);