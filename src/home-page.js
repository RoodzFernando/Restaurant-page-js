export function homePage() {
  const textWrap = document.createElement('div');
  textWrap.classList.add('resto-motto');
  textWrap.innerHTML = "<h2>Welcome to Restaurant Page, your number one source for all sane food. We're dedicated to providing you the very best of recipes</h2>";
  document.querySelector('section > div.jumbo').appendChild(textWrap);
}
