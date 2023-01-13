const input = document.getElementById("inpt");
const checkBtn = document.getElementById("check");
const result = document.getElementById("result");
const range = document.getElementById("range");
const remain = document.getElementById('remain')
const relod = document.getElementById('relod')


let random = Math.round(Math.random() * 100);
let up = 100;
let down = 0;
let answer;
let remainCounter = 3
let counter = 0


checkBtn.addEventListener("click", () => {
  counter++
  if(counter >= 3){
    remain.innerText = 'Youl Lose'
    return result.innerText = `Answer is ${random}`
  }
  remainCounter--
  remain.innerText = `${remainCounter} remain`
  answer = input.value;
  console.log(random);
  !isNaN(answer) || alert("Enter a Number");
  answer == random ? alert("You Find") : closestNums();
  input.value = "";
  input.focus();
});


const closestNums = () => {
  if(random > answer && random < up && down < answer){
    down = answer
  }
  else if(random < answer && random < up && up > answer){
    up = answer
  }
  range.innerText = `${down} - ${up}`;
};

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkBtn.click();
  }
});

relod.addEventListener('click', () => {
  window.location.reload()
})