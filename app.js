const input = document.getElementById("inpt");
const checkBtn = document.getElementById("check");
const result = document.getElementById("result");
const range = document.getElementById("range");
const remain = document.getElementById('remain')
const relod = document.getElementById('relod')
const seeAnswer = document.getElementById('seeAnswer')


let random = Math.round(Math.random() * 100);
let up = 100;
let down = 0;
let answer;
let remainCounter = 3
let counter = 0

console.log(random);

checkBtn.addEventListener("click", () => {
  counter++
  remainCounter--
  remain.innerText = `${remainCounter} remain`
  answer = input.value;
  !isNaN(answer) || alert("Enter a Number");
  answer == random ? findNum() : closestNums();
  if(counter >= 3){
    remain.innerText = 'Youl Lose'
    return result.innerText = `Answer is ${random}`
  }
  input.value = "";
  input.focus();
});

const findNum = () => {
  alert("You Find")
  relod.click()
}

const closestNums = () => {
  if(counter >= 3){
    remain.innerText = 'Youl Lose'
    return result.innerText = `Answer is ${random}`
  }
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

seeAnswer.addEventListener('mouseover' , (e) => {
  operatorArr = ["+", "-"]
  positionX = (Math.random() * 300)
  positionY = (Math.random() * 300)
  topP = operatorArr[(Math.round(Math.random()))].concat(positionX)
  leftP = operatorArr[(Math.round(Math.random()))].concat(positionY)
  console.log(topP);
  console.log(leftP);
  seeAnswer.style.position = 'relative'
  seeAnswer.style.top = `${topP}px`
  seeAnswer.style.left = `${leftP}px`
})