const input = document.getElementById("input");

const reg =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const img = document.querySelector("#img");

input.addEventListener("keyup", (eo) => {
  if (reg.test(input.value)) {
    input.classList.add("success");
    input.classList.remove("eroor");
    img.setAttribute("src", "download.jfif");
  } else {
    input.classList.remove("success");
    input.classList.add("eroor");
    img.setAttribute("src", "images.jfif");

  }
});
