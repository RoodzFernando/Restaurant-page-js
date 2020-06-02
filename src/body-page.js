export function pageContent() {
  const bodySection = document.createElement('section');
  const bodyDiv = document.createElement('div');
  bodyDiv.classList.add('jumbo');
  const mottoDiv = document.createElement('div');
  mottoDiv.classList.add('resto-motto');
  mottoDiv.innerHTML = "<h2>Welcome to Restaurant Page, your number one source for all sane food. We're dedicated to providing you the very best of recipes</h2>";
  bodyDiv.appendChild(mottoDiv);
  bodySection.appendChild(bodyDiv);
  document.getElementById('content').appendChild(bodySection);
}
