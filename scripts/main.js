/*
2e version pour pas avoir de faisceau nu
une icone qui part vers le haut
avant qu'ellee disparaisse l'autre apparait en même temps
*/
// variables
let snowContainer = document.querySelector(".snow_container");
// functions
const snowMaker = () => {
  const snow = document.createElement("span");

  //   snowContainer.classList.add("front-light");
  snow.classList.add("snow");
  snowContainer.appendChild(snow);

  // random size
  const size = Math.random() * 10 + "px";
  snow.style.height = size;
  snow.style.width = size;
  // random appearance on the page
  snow.style.top = Math.random() * 100 + "%";
  snow.style.left = Math.random() * 100 + 50 + "%";

  setTimeout(() => {
    snow.remove();
  }, 5000);
};

// call
setInterval(snowMaker, 50);
