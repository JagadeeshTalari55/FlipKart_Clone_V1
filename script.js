const header = document.querySelector(".header");

const imagesArray = [
  "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/82fb6e04ef0bf250.jpg?q=50",
  "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/4a15920a60df9af4.jpg?q=50",
  "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/3252244722779d39.jpg?q=50",
  "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/5f478a106d047aba.jpg?q=50",
  "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/81e7f027a29c2820.jpg?q=50",
  "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/2bf2f1edc24bd2ca.png?q=50",
  "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/69f3475b56ede2a7.png?q=50",
  "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/d93e9db3b8c96929.jpg?q=50",
];

let i = 0;
header.innerHTML = `<img  src="${imagesArray[i]}" alt=""></img>`;

function prevBtn() {
  i = i - 1;
  carousalFunc();
}

function nextBtn() {
  i = i + 1;
  carousalFunc();
}

function carousalFunc() {
  if (i == -1) {
    i = imagesArray.length - 1;
  } else if (i == imagesArray.length) {
    i = 0;
  } else {
    i = i;
  }
  header.innerHTML = `<img  src="${imagesArray[i]}" alt=""></img>`;
}


