let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let colorCardCont = document.querySelector(".priority-colors-container");

let addTaskFlag = false;
let removeTaskFlag = false;

addBtn.addEventListener("click", function () {
  addTaskFlag = !addTaskFlag;
  let modalCont = document.querySelector(".modal-cont");
  if (addTaskFlag) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

removeBtn.addEventListener("click", function () {
  removeTaskFlag = !removeTaskFlag;
  alert("Remove button activated");
  if (removeTaskFlag) {
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});

// make the color card active when clicked other inactive

// remove active class from all color cards and add active class to the clicked color card
colorCardCont.addEventListener("click", function (e) {
  if (e.target.classList.contains("priority-color")) {
    let colorCards = document.querySelectorAll(".priority-color");
    colorCards.forEach(function (colorCard) {
      colorCard.classList.remove("active");
    });

    e.target.classList.add("active");
  }
});
