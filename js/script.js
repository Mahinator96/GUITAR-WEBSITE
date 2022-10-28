"use strict"

const reviewsSwiper = document.querySelector(".swiper-reviews");
var favoriteBody = document.querySelector(".favorite__body");
var favoriteImages = document.querySelector(".favorite__images");
var buttons = document.querySelector("#buttons");
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;

// if (pageWidth <= 1050) {
//   favoriteBody.appendChild(favoriteImages);
// }

function page(width) {
  if (width <= 1050) {
    favoriteBody.removeChild(buttons);
  } else {
    favoriteBody.appendChild(buttons);
  }  
  return page(width);
}
page(mainElementWidth);
console.log(mainElementWidth)
// }


if (buttons) {
  console.log("Есть такой");
} else {
  console.log(pageWidth);
}

if (reviewsSwiper) {
  const swiper = new Swiper('.swiper-reviews', {
    // Optional parameters
    autoHeight: true,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: "true",
    },
  
  });
}
