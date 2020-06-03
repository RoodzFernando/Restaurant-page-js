export default function footer() {
  const footerLinks = {
    links: ['https://twitter.com/RoodzFernando',
      'https://www.linkedin.com/in/roodz-fernando-fleurant/',
      'https://github.com/RoodzFernando',
    ],

    ids: ['twitter', 'linkedin', 'github'],
  };
  const footerTag = document.createElement('footer');
  const divLogo = document.createElement('div');
  divLogo.classList.add('footer-logo');
  const newDivLogo = document.createElement('div');
  newDivLogo.textContent = 'Restaurant Page';
  divLogo.appendChild(newDivLogo);

  const para = document.createElement('p');
  para.innerHTML = '2020&copy; |  <a href="https: //twitter.com/RoodzFernando">@RoodzFernando</a>';
  divLogo.appendChild(para);

  footerTag.appendChild(divLogo);
  const footerLink = document.createElement('div');
  footerLink.classList.add('footer-links');

  for (let elem = 0; elem < footerLinks.links.length; elem++) {
    const insideDiv = document.createElement('div');
    const linkTag = document.createElement('a');
    linkTag.href = footerLinks.links[elem];
    insideDiv.classList.add('social-link');
    insideDiv.id = footerLinks.ids[elem];
    linkTag.appendChild(insideDiv);
    footerLink.appendChild(linkTag);
  }

  footerTag.appendChild(footerLink);
  document.getElementById('content').appendChild(footerTag);
}
