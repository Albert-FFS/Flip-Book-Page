

let front = document.querySelector(".face-front");
let back = document.querySelector(".face-back");
let flip = document.querySelector(".book-content");
let uno = document.querySelectorAll(".book");
let portada = document.querySelectorAll("#portada");

let contZindex = 2;
let customZindex = 1;
for (let index = 0; index < uno.length; index++) {
  // uno[index] as HTMLElement;
  uno[index].style.zIndex = customZindex;
  customZindex--;
  uno[index].addEventListener("click", (e) => {
    let tgt = e.target;
    let unoThis = this;
    console.log(this);
    unoThis.style.zIndex = contZindex;
    contZindex++;
    if (tgt.getAttribute("class") == "face-front") {
      unoThis.style.zIndex = contZindex;
      contZindex += 20;
      setTimeout(() => {
        unoThis.style.transform = "rotate(-180deg)";
      }, 500);
    }
  });
}
// 7:40
