export function pageContent() {
    let bodySection = document.createElement("section");
    let bodyDiv = document.createElement("div");
    bodyDiv.classList.add("jumbo");
    // bodyDiv.innerHTML = "<h2>Eating good food is the experience you will have with us..</h2>";
    bodySection.appendChild(bodyDiv);
    document.getElementById("content").appendChild(bodySection);
}