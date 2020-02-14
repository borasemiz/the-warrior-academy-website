export const html = `<p class="alert" id="alert">Alert!</p>
<button id="dismiss">Dismiss</button>`;

export const css = `.alert {
  animation-name: lightup;
  animation-duration: 1s;
  animation-iteration: infinite;
  animation-direction: alternate;
}

.stop-lightingup {
  animation-name: unset;
}

@keyframes lightup {
  from { opacity: 0.0; }
  to { opacity: 1.0; }
}`;

export const js = `const dismissButton = document.getElementById("dismiss");
const alert = document.getElementById("alert");

dismissButton.addEventListener("click", () => {
  alert.classList.add("stop-lightingup");
})`;