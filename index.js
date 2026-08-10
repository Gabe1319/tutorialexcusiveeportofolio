let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20

function moveBackground(event) {
  // Move background shapes slightly based on pointer position
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor // range approx -15..15
  const y = event.clientY * scaleFactor
  for (let i = 0; i < shapes.length; i++) {
    const boolInt = i % 2 === 0 ? 1 : -1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");
  emailjs
    .sendForm(
      "service_32mv14y",
      "template_wsaudea",
      event.target,
      "tZJL41HLK_cGHMi58",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on gabealitvin@gmail.com",
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList.add("modal--open");
}
