const boxes = document.querySelectorAll('.box');

boxes.forEach(function (box) {
  box.addEventListener("click", () => {
    box.style.backgroundColor = "black";
  });

  box.addEventListener("mouseover", () =>{
    box.style.backgroundColor ="white";
  });
  }
);

