/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generatepinta());
  document.querySelector(".card").innerHTML = generatenumber();
};

let generatenumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generatepinta = () => {
  var pinta = ["diamond", "spade", "hearth", "club"];
  let indexpinta = Math.floor(Math.random() * pinta.length);
  return pinta[indexpinta];
};
