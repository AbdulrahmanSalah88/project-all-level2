const button = document.getElementById("upload");
const form = document.querySelector("form");
const container = document.querySelector(".cont");
const input = document.querySelector("input");


form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const nt = ` <div class="task">
  <span class="icon-star icon"></span>
  <p class="np">${input.value}</p>
  <div>
    <span class="icon-trash icon"></span>
    <span class="icon-angry2 icon"></span>
  </div>
</div> `;
  container.innerHTML += nt;
  input.value = "";
});

container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;

    case "icon-angry2 icon":
      eo.target.classList.add("non");
      const heart = ` <span class="icon-heart icon"></span> `;
      eo.target.parentElement.parentElement
        .getElementsByClassName("np")[0]
        .classList.add("line");
      eo.target.parentElement.innerHTML += heart;
      break;

    case "icon-heart icon":
      eo.target.classList.add("non");
      const angry = ` <span class="icon-angry2 icon"></span> `;
      eo.target.parentElement.parentElement
        .getElementsByClassName("np")[0]
        .classList.remove("line");
      eo.target.parentElement.innerHTML += angry;
      break;

    case "icon-star icon":
      eo.target.classList.add("star");
      container.prepend(eo.target.parentElement);
      break;

    case "icon-star icon star":
      eo.target.classList.remove("star");
      container.append(eo.target.parentElement);
      break;
  }
});

