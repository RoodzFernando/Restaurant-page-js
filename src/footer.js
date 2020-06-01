export default function footer() {
    const footerLinks = {
        links: ["https://twitter.com/RoodzFernando",
            "https://www.linkedin.com/in/roodz-fernando-fleurant/",
            "https://github.com/RoodzFernando"
        ],

        ids: ["twitter", "linkedin", "github"],
    }
    let footerTag = document.createElement("footer");
    let divLogo = document.createElement("div");
    divLogo.classList.add("footer-logo");
    let newDivLogo = document.createElement("div");
    newDivLogo.textContent = "Restaurant Page";
    divLogo.appendChild(newDivLogo);

    let para = document.createElement("p");
    para.innerHTML = '2020&copy; |  <a href="https: //twitter.com/RoodzFernando">@RoodzFernando</a>';
    divLogo.appendChild(para);

    footerTag.appendChild(divLogo);
    let footerLink = document.createElement("div");
    footerLink.classList.add("footer-links");

    for (let elem = 0; elem < footerLinks.links.length; elem++) {
        let insideDiv = document.createElement("div");
        let linkTag = document.createElement("a");
        linkTag.href = footerLinks.links[elem];
        insideDiv.classList.add("social-link");
        insideDiv.id = footerLinks.ids[elem];
        linkTag.appendChild(insideDiv);
        footerLink.appendChild(linkTag);
    }

    footerTag.appendChild(footerLink);
    document.getElementById("content").appendChild(footerTag);

}