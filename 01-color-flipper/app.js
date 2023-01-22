const Colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0 - 3 because arrays are 0 index
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = Colors[randomNumber];
  color.textContent = Colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * Colors.length);
}
