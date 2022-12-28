// Rules:
// rock > scissors
// scissors > paper
// paper > rock
document.querySelector("#input").addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      submit();
    }
});
let oponentChoise = 0;
let oponentMove = "";
let playerMove = "";
let playerChoise = 0;
const moves = ["📝", "✂", "🪨", "✂", "📝", "✂", "🪨", "✂", "📝", "✂"];
function submit(){
    if(document.querySelector("#input").value !== "1" || document.querySelector("#input").value !== "2" || document.querySelector("#input").value !== "3"){
        oponentChoise = Math.floor(Math.random() * 10);
        oponentMove = moves[oponentChoise];
        document.querySelector("#oponent").innerHTML = oponentMove;
        playerChoise = document.querySelector("#input").value;
        playerMove = moves[playerChoise];
        document.querySelector("#player").innerHTML = playerMove;
        if (playerMove === oponentMove){
            document.querySelector("#Status").innerHTML = "Draw";
        }else if (playerMove === "🪨" && oponentMove === "✂"){
            document.querySelector("#Status").innerHTML = "Win";
        }else if (playerMove === "✂" && oponentMove === "📝"){
            document.querySelector("#Status").innerHTML = "Win";
        }else if (playerMove === "📝" && oponentMove === "🪨"){
            document.querySelector("#Status").innerHTML = "Win";
        }else if (playerMove === "✂" && oponentMove === "🪨"){
            document.querySelector("#Status").innerHTML = "Lose";
        }else if (playerMove === "📝" && oponentMove === "✂"){
            document.querySelector("#Status").innerHTML = "Lose";
        }else if (playerMove === "🪨" && oponentMove === "📝"){
            document.querySelector("#Status").innerHTML = "Lose";
        }
    }
}