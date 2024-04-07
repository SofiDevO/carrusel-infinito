import { carruselData } from "./carruselData.js";
const slideTrack = document.querySelector(".slide__track");
const carruselCards = carruselData.map(
  (data) => `
    <div class="slide">
    <img src=${data.src}
    alt=${data.name}>
    </div>
`).join("");

slideTrack.innerHTML = carruselCards;
