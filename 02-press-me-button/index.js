const buttonA = document.querySelector("#button_A");
console.log(buttonA);

buttonA.onClick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}!`);
};
