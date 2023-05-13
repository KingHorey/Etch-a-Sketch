const body = document.body;
const normal = document.querySelector(".normal");
const board = document.querySelector(".board");
const grids = document.querySelector(".grids");
const slide = document.querySelector(".slider");
const slideVal = slide.value;
const random = document.querySelector(".random");

const divHover = function () {
  // get the columns with class name .cols
  return document.querySelectorAll(".cols");
};

random.addEventListener("click", (event) => {
  random.classList.toggle("clicked");
  colorDiv();
});

normal.addEventListener("click", (event) => {
  normal.classList.toggle("clicked");
  if (random.classList.contains("clicked")) {
    random.classList.toggle("clicked");
    colorDiv();
    }
    
  }
);

function createDiv() {
  // create gird of divs based on input value
  const slideVal = (slide.value);

  grids.innerHTML = "";

  for (let i = 1; i <= slideVal ** 2; i++) {
    var columns = document.createElement('div');
    columns.classList.add("cols");
    grids.append(columns);
  }

  grids.style.gridTemplateColumns = `repeat(${slideVal}, 1fr)`;
  grids.style.gridTemplateRows = `repeat(${slideVal}, 1fr)`;
  colorDiv();
  // randomColor();
};

createDiv();
slide.addEventListener('click', createDiv);


function colorDiv() {
  //color the child divs
  var divs = divHover();
  if (random.classList.contains("clicked")) {
      normal.classList.remove("clicked");
      divs.forEach(element => element.addEventListener("mouseover", () => element.style.backgroundColor = randomColor()));
    }
  else {
      divs.forEach(element =>  element.addEventListener("mouseover", () => element.style.backgroundColor = "lightgreen"));
  }
};

//clear table

const clr = document.getElementById("clear")

clr.addEventListener("click", () => {
  divs = divHover();
  divs.forEach(element => element.style.backgroundColor = 'transparent');
});

// style random

function randomColor() {
  var color = "#" + Math.floor(Math.random()*16777215).toString(16);
  return color;
}



