const buttonA = document.querySelector("#button_A");
console.log(buttonA);

buttonA.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}!`);
};
