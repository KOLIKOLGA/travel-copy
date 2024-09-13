"user strict";
console.log("Hello console!!!");
console.log("score 90/100");

const modal = () => {
  const loginButton = document.querySelector(".header-button");
  const loginModal = document.querySelector(".login__modal");
  const menuIcon = document.querySelector(".menu__icon");
  const login = document.querySelector(".login");
  const body = document.querySelector("body");
  const menuIconModal = document.querySelector(".menu-icon__modal");
  const navigationModal = document.querySelector(".navigation__modal");
  const navLink = document.querySelectorAll(".nav-list__link");
  const register = document.querySelector(".register");
  const signGoogle = document.querySelector(".sign-block-google");
  const signFacebook = document.querySelector(".sign-block-facebook");
  const variableText = document.querySelector(".variable-text");
  const loginTitle1 = document.querySelector(".login-title1");
  const loginTitle2 = document.querySelector(".login-title2");
  const signButton = document.querySelector(".sign__button");
  const modalInner = document.querySelector(".modal__inner");
  const registerLogin = document.querySelector(".sign-block-text-lite");
  const registerLogin2 = document.querySelector(".sign-block-text-lite2");
  const registerBack = document.querySelector(".register-login");

  const moveUp = () => {
    loginModal.classList.add("login-modal__active");
    modalInner.classList.add("transition-up");
    body.classList.add("noscroll");
    body.classList.add("padding__right");
  };

  const moveDoun = () => {
    loginModal.classList.remove("login-modal__active");
    modalInner.classList.add("transition-doun");
    body.classList.remove("noscroll");
    body.classList.remove("padding__right");
    registerLogin2.classList.toggle("hidden");
    registerLogin.classList.toggle("hidden");
  };

  menuIconModal.addEventListener("click", () => {
    navigationModal.classList.remove("_active");
  });

  loginButton.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-up") {
      // body.classList.add('noscroll');
      // body.classList.add('padding__right');
    }
    if (animationEvent.animationName === "move-doun") {
      // body.classList.remove('noscroll');
      // body.classList.remove('padding__right');
    }
  });

  loginButton.addEventListener("click", moveUp);

  login.addEventListener("click", () => {
    moveUp();
    //navigationModal.classList.remove('_active');
    // loginModal.classList.add('login-modal__active');
    // modalInner.classList.add('modal-inner__active');
    body.classList.add("noscroll");
    body.classList.add("padding__right");
    menuIcon.classList.remove("active");
    // navigation.classList.remove('_active');
    body.classList.remove("padding__right");
  });

  menuIcon.addEventListener("click", () => {
    // menuIcon.classList.toggle('active');
    navigationModal.classList.add("_active");
  });

  navigationModal.addEventListener("click", (event) => {
    const navigationContent = event.target.closest(".navigation__inner");

    if (!navigationContent) {
      navigationModal.classList.remove("_active");
    }
  });

  loginModal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner"); // закрывает логин попап по клику вне его области

    if (!modalContent) {
      moveDoun();
      // loginModal.classList.remove('login-modal__active');
      // modalInner.classList.remove('modal-inner__active');
      body.classList.remove("noscroll");
      body.classList.remove("padding__right");
      signGoogle.classList.remove("hidden");
      signFacebook.classList.remove("hidden");
      variableText.classList.remove("hidden");
      loginTitle1.classList.remove("hidden");
      loginTitle2.classList.add("hidden");
      modalInner.style.height = 650 + "px";
    }
  });

  navLink.forEach((link) => {
    link.addEventListener("click", (event) => {
      navigationModal.classList.remove("_active"); // закрывает нав-окно по клику по ссылке в нем
    });
  });

  register.addEventListener("click", () => {
    signGoogle.classList.add("hidden");
    signFacebook.classList.add("hidden");
    variableText.classList.add("hidden");
    loginTitle1.classList.add("hidden");
    loginTitle2.classList.remove("hidden");
    modalInner.style.height = 436 + "px";
    registerLogin.classList.toggle("hidden");
    registerLogin2.classList.toggle("hidden");
  }); // уменьшает попап до формы регистрации
  registerBack.addEventListener("click", () => {
    signGoogle.classList.remove("hidden");
    signFacebook.classList.remove("hidden");
    variableText.classList.remove("hidden");
    loginTitle1.classList.remove("hidden");
    loginTitle2.classList.add("hidden");
    modalInner.style.height = 650 + "px";
    registerLogin.classList.toggle("hidden");
    registerLogin2.classList.toggle("hidden");
  }); // возвращает обратно на полную форму попапа

  signButton.addEventListener("click", () => {
    let text = document.querySelector("#email");
    let password = document.querySelector("#password");
    let userMail = text.value;
    let userPassword = password.value;
    alert("Ваш email: " + userMail + " " + "\nВаш password: " + userPassword);
  });
};

modal();
