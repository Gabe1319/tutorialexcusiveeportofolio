

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('modal__overlay--visible');
  const success = document.querySelector('modal__overlay--visible');
  loading.class += " modal__overlay-visible"
  emailjs
  .sendForm(
    'service_32mv14y',
  'template_wsaudea',
  event.target,
'tZJL41HLK_cGHMi58'
).then(()=> { loading.classList.remove("modal__overlay--visible");
  success.classList += "modal__overlay--visible";
}).catch (() => {
  loading.classList.remove("modal__overlay--visible");
  alert(
    "The email service is temporarily unavailable. Please contact me directly on gabealitvin@gmail.com"
  );
})
}