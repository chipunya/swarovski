import { getData } from "./data.js";

const data = getData();
// console.log(data);

//VARIABLES
const container = document.querySelector(".container");
const input = document.querySelector("#input");
const searchBtn = document.querySelector("#search-btn");
const viewAllBtn = document.querySelector("#viewAll-btn");

//filtering options
const allCategories = document.querySelectorAll(".bracelet");
const allMaterials = document.querySelectorAll(".material");
const allColors = document.querySelectorAll(".color");

//EVENT LISTENERS
//search by input
searchBtn.addEventListener("click", searchWatches);

//view all watches
viewAllBtn.addEventListener("click", resetDisplay);

//search by bracelet
allCategories.forEach((category) => {
  category.addEventListener("click", searchByBracelet);
});

//search by color
allColors.forEach((color) => {
  color.addEventListener("click", searchByColor);
});

//search by material
allMaterials.forEach((material) => {
  material.addEventListener("change", searchByMaterial);
});

//HELPER FUNCTIONS
//function to clear the container
function clearContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
//Function to reset after searching watches
function resetDisplay(arr) {
  input.value = "";
  clearContainer();
  displayWatches(data);
}

//Function to display all watches
function displayWatches(arr) {
  arr.forEach((el) => {
    const cardDiv = document.createElement("div");
    const ribbonDiv = el.isInStock
      ? ""
      : "<div class='ribbon'><p>Sold Out!</p></div>";
    cardDiv.classList.add("card");
    cardDiv.innerHTML = `${ribbonDiv}<img class="watch-image" src=${el.imageSrc} alt="">
      <div class="watch-info">
              <p class="watch-name">${el.name}</p>
              <p class="watch-detail">${el.bracelet}, ${el.dial}</p>
              <p class="watch-price">$${el.price}</p>
            </div>`;
    container.appendChild(cardDiv);
  });
  input.value = "";
}
displayWatches(data); //calling this function to display all watches from the very beginning

//MAIN FUNCTIONS

// Function to display watches filtered by search input
function searchWatches(element, inputValue) {
  // removing all objects(watches) from the container:
  clearContainer();
  //creating a new array, which will hold objects(watches) meeting the search input
  let filteredArray = [];
  const inputText = input.value.toLowerCase().split(" ");

  //looping through each element(watch) of the Data array and adding matching watches to the new array
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < inputText.length; j++) {
      if (
        data[i].name.includes(inputText[j]) ||
        data[i].bracelet.includes(inputText[j]) ||
        data[i].color.includes(inputText[j]) ||
        data[i].dial.includes(inputText[j])
      ) {
        filteredArray.push(data[i]);
      }
    }
  }
  // displaying the objs(watches) contained in the new array (objs containing the search input)
  return displayWatches(filteredArray);
}

// Search by category(bracelet)
function searchByBracelet() {
  const braceletCategory = this.id.split("-")[0]; // get clicked id and split it to get exact bracelet type
  const filteredArray = data.filter((el) =>
    el.bracelet.includes(braceletCategory)
  );
  clearContainer();
  return displayWatches(filteredArray);
}

//Search by material(dial)
function searchByMaterial() {
  const materialType = this.id.split(" "); // get clicked id and split it to get exact bracelet type
  const filteredArray = data.filter((el) => el.dial.includes(materialType));
  clearContainer();
  return displayWatches(filteredArray);
}

//Search by color
function searchByColor() {
  const selectedColor = this.id.split("-")[0]; // get clicked id and split it to get exact bracelet type
  const filteredArray = data.filter((el) => el.color.includes(selectedColor));
  clearContainer();
  return displayWatches(filteredArray);
}
