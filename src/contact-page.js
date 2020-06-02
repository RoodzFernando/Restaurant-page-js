export function createForm() {
    let myForm = document.createElement("form");
    // 2 inputs
    let nameInp = document.createElement("input");
    nameInp.placeholder = "Name";
    nameInp.type = "text";

    let emailInp = document.createElement("input");
    emailInp.placeholder = "Email";
    emailInp.type = "email";
    // 1 textarea
    let messageText = document.createElement("textarea");
    messageText.placeholder = "Message";
    // 1 button
    let sendMess = document.createElement("button");
    sendMess.textContent = "Send";
    let formArr = [nameInp, emailInp, messageText, sendMess];
    for (let field of formArr) {
        let wrapDiv = document.createElement("div");
        wrapDiv.appendChild(field);
        myForm.appendChild(wrapDiv);
    }
    document.querySelector("section > div.jumbo").appendChild(myForm);
}