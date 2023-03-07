// const calc = document.querySelector("button");

// const uppdate = (eo) => {
//   const allproduct = document.querySelectorAll(".product");

//   let total = 0;

//   allproduct.forEach((item) => {
//     const p = Number(
//       item.getElementsByClassName("price")[0].innerText.replace("$", "")
//     );

//     const n = Number(item.getElementsByClassName("input")[0].value);

//     total = total + (p * n);
//   });

//   document.querySelector(".zoon-Area").innerText = ` All price ${Math.ceil(total)}  $`;
// };

// // cont.style.border = "red solid 2px";

// let cont = document.getElementById("container");
// calc.addEventListener("click", (eo) => {
//   uppdate();
// });

// cont.addEventListener("change", (eo) => {
//   uppdate();
// });

const zoon = document.querySelector(".zoon-Area");
const calc = document.getElementById("calc");

// resuble function => total price
const area = (item) => {
  {
    const Allproduct = document.querySelectorAll(".product");

    let total = 0;

    Allproduct.forEach((item) => {
      const price = Number(
        item.getElementsByClassName("price")[0].innerText.replace("$", "")
      );

      const input = Number(item.getElementsByClassName("input")[0].value);

      total = total + (price * input);
    });

    zoon.innerText = Math.round(total);
  }
};

calc.addEventListener("click", (eo) => {
  area();
});

container.style.border = ` red solid 2px`;

container.addEventListener("change", (eo) => {
  area();
});
