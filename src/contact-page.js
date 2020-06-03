export function createForm() {
  const myForm = document.createElement('form');
  // 2 inputs
  const nameInp = document.createElement('input');
  nameInp.placeholder = 'Name';
  nameInp.type = 'text';

  const emailInp = document.createElement('input');
  emailInp.placeholder = 'Email';
  emailInp.type = 'email';
  // 1 textarea
  const messageText = document.createElement('textarea');
  messageText.placeholder = 'Message';
  // 1 button
  const sendMess = document.createElement('button');
  sendMess.textContent = 'Send';
  const formArr = [nameInp, emailInp, messageText, sendMess];
  for (const field of formArr) {
    const wrapDiv = document.createElement('div');
    wrapDiv.appendChild(field);
    myForm.appendChild(wrapDiv);
  }
  document.querySelector('section > div.jumbo').appendChild(myForm);
}
