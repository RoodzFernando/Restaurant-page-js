export default function navigationBar() {
  const linksArr = ['home', 'menu', 'contact'];
  const mainContent = document.getElementById('content');
  const navBar = document.createElement('nav');
  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.innerText = 'Restaurant Page';
  navBar.appendChild(logo);
  mainContent.appendChild(navBar);
  const navLinks = document.createElement('div');
  navLinks.classList.add('navigation-links');
  const myNavLink = [];
  for (const link of linksArr) {
    const myLink = document.createElement('a');
    myLink.href = '#';
    myLink.id = link;
    myLink.textContent = link;
    navLinks.appendChild(myLink);
    myNavLink.push(link);
  }
  navBar.appendChild(navLinks);
  document.getElementById(myNavLink[0]).setAttribute('class', 'active');
}
