// FOR TOMORROW: TRY DELETING THE PARENT EVERYTIME THE INPUT CHANGES
// TO THEN MAKE A NEW ONE EVERY TIME IT CHANGES
// ANIMATION BASICALLY
// LOOK AT THE FUNCTION IN THE END
// INSTEAD OF DELETING THE PARENT, DELETE THE CHILDREN



const container = document.querySelector("#container");
container.style.width = "690px"



for (let i = 1; i <= 64; i++) {
  for (let j = 1; j <= 64; j++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
  }
}


let individualGrid = document.querySelectorAll(".grid");

individualGrid.forEach((grid) => {
  grid.style.width = "10.78px";
  grid.style.height = "10.78px"
})
individualGrid.forEach((grid) => {
  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = `rgb(${Math.random() * (255 + 1)}, ${Math.random() * (255 + 1)}, ${Math.random() * (255 + 1)})`;
  });           
});

const clearBtn = document.querySelector("#clear-btn");
individualGrid.forEach((grid) => {
  clearBtn.addEventListener("click", () => {
    grid.style.backgroundColor = "lightblue";
  });
});

const blackBtn = document.querySelector("#black-btn");
blackBtn.addEventListener("click", () => {
  individualGrid.forEach((grid) => {
    grid.addEventListener("mousemove", () => {
      grid.style.backgroundColor = "black";
    });
  });
});

const rainbowBtn = document.querySelector("#rainbow-btn");
rainbowBtn.addEventListener("click", () => {
  individualGrid.forEach((grid) => {
    grid.addEventListener("mousemove", () => {
      grid.style.backgroundColor =  `rgb(${Math.random() * (255 + 1)}, ${Math.random() * (255 + 1)}, ${Math.random() * (255 + 1)})`;
    });
  });
});

const gridAmount = document.querySelector("#grid-amount");
const labelGridAmount = document.querySelector("#label-grid-amount");

document.getElementById("grid-amount").step = `${2 ** 2}`


labelGridAmount.textContent = gridAmount.value;
gridAmount.addEventListener("input", (e) => {
  labelGridAmount.textContent = `${e.target.value} x ${e.target.value}`;
});

gridAmount.addEventListener("input", (e) => {
  let amount = e.target.value;
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  };
  let width = 690 / e.target.value;
  let height = 690 / e.target.value;
  for (let i = 1; i <= amount; i++) {
    for (let j = 1; j <= amount; j++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      container.appendChild(div);
    }
  }
  const grid = document.querySelectorAll(".grid");
  grid.forEach((grid) => {
    console.log(width / 1.125)
    grid.style.width = `${width}px`;
    grid.style.height = `${height}px`
  })
  individualGrid = grid;
  individualGrid.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = `rgb(${Math.random() * (255 + 1)}, ${Math.random() * (255 + 1)}, ${Math.random() * (255 + 1)})`;
    });        
  });
  individualGrid.forEach((grid) => {
    clearBtn.addEventListener("click", () => {
      grid.style.backgroundColor = "lightblue";
    });
  });
});


