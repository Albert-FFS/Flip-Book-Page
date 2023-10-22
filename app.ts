let front = document.querySelector('.face-front');
let back = document.querySelector('.face-back');
let flip = document.querySelector('.book-content');
let uno = document.querySelectorAll('.book');
let portada = document.querySelectorAll('#portada');

let contZindex = 2;
let customZindex = 1;
for (let index = 0; index < uno.length; index++) {
  // uno[index] as HTMLElement;
  // uno[index].style.zIndex = customZindex;
  customZindex--;
}
// 7:40