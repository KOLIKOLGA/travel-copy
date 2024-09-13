"user strict";

const slider = () => {
  const btnLeft = document.querySelector("#button-left");
  const btnRight = document.querySelector("#button-right");
  const slider = document.querySelector("#slider-line");
  const itemLeft = document.querySelector("#item-left");
  const itemRight = document.querySelector("#item-right");
  const itemActive = document.querySelector("#item-active");
  const itemLeft2 = document.querySelector("#item-left-left");
  const itemRight2 = document.querySelector("#item-right-right");
  const sliderDot = document.querySelector("#ellipse2");
  const sliderDotLeft = document.querySelector("#ellipse1");
  const sliderDotRight = document.querySelector("#ellipse3");
  const sliderLine = document.querySelector(".slider-line");

  console.log(itemActive.children[0].id);

  const moveLeft = () => {
    slider.classList.add("transition-left");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight); // отключаем возможность клика на время анимации
    sliderDotLeft.removeEventListener("click", moveLeft);
    sliderDotRight.removeEventListener("click", moveRight);
  };

  const moveRight = () => {
    slider.classList.add("transition-right");
    btnRight.removeEventListener("click", moveRight);
    btnLeft.removeEventListener("click", moveLeft); // отключаем возможность клика на время анимации
    sliderDotLeft.removeEventListener("click", moveLeft);
    sliderDotRight.removeEventListener("click", moveRight);

    // sliderDot.classList.remove('active');
  };

  slider.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
      slider.classList.remove("transition-left");

      const leftItems = itemLeft.innerHTML;
      const activeItems = itemActive.innerHTML;
      const rightItems = itemRight.innerHTML;
      const leftItems2 = itemLeft2.innerHTML;
      const rightItems2 = itemRight2.innerHTML;

      document.querySelector("#item-active").innerHTML = leftItems;
      document.querySelector("#item-right").innerHTML = activeItems;
      document.querySelector("#item-left").innerHTML = rightItems;
      document.querySelector("#item-right-right").innerHTML = activeItems;
      document.querySelector("#item-left-left").innerHTML = rightItems2;

      const activeDot = () => {
        console.log(itemActive.children[0].id);
        if (itemActive.children[0].id == 2) {
          sliderDot.classList.add("active");
          sliderDotLeft.classList.remove("active");
          sliderDotRight.classList.remove("active");
        }
        if (itemActive.children[0].id == 1) {
          sliderDot.classList.remove("active");
          sliderDotLeft.classList.add("active");
          sliderDotRight.classList.remove("active");
        }
        if (itemActive.children[0].id == 3) {
          sliderDot.classList.remove("active");
          sliderDotLeft.classList.remove("active");
          sliderDotRight.classList.add("active");
        }
      };
      activeDot();
    } else {
      slider.classList.remove("transition-right");
      const leftItems = itemLeft.innerHTML;
      const activeItems = itemActive.innerHTML;
      const rightItems = itemRight.innerHTML;
      const leftItems2 = itemLeft2.innerHTML;
      const rightItems2 = itemRight2.innerHTML;

      document.querySelector("#item-active").innerHTML = rightItems2;
      document.querySelector("#item-left").innerHTML = activeItems;
      document.querySelector("#item-right-right").innerHTML = leftItems2;
      document.querySelector("#item-left-left").innerHTML = activeItems;
      document.querySelector("#item-right").innerHTML = leftItems;

      const activeDot = () => {
        console.log(itemActive.children[0].id);
        if (itemActive.children[0].id == 2) {
          sliderDot.classList.add("active");
          sliderDotLeft.classList.remove("active");
          sliderDotRight.classList.remove("active");
        }
        if (itemActive.children[0].id == 1) {
          sliderDot.classList.remove("active");
          sliderDotLeft.classList.add("active");
          sliderDotRight.classList.remove("active");
        }
        if (itemActive.children[0].id == 3) {
          sliderDot.classList.remove("active");
          sliderDotLeft.classList.remove("active");
          sliderDotRight.classList.add("active");
        }
      };
      activeDot();
    }

    btnLeft.addEventListener("click", moveLeft);

    btnRight.addEventListener("click", moveRight);

    // sliderDotLeft.addEventListener("click", moveLeft);
    // sliderDotRight.addEventListener("click", moveRight);
  });

  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);

  // sliderDotLeft.addEventListener("click", moveLeft);
  // sliderDotRight.addEventListener("click", moveRight);
};

slider();
