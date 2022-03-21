import Button from "./button.js";
import Imagen from "./imagen.js";

let myDiv = document.querySelector("#myApp");

let myButton = new Button("Click me!");

myDiv.innerHTML = myButton.render();

let myImage = new Imagen("./assets/spongebob.png");

myDiv.innerHTML += myImage.render();