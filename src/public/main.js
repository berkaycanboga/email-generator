const emailList = document.getElementById('emailList');
const fullName = document.getElementById('fullName'); // for input reset
const companyUrl = document.getElementById('companyUrl'); // for input reset

const emailInformations = {};

document.forms['form'].addEventListener('submit', (event) => {
  event.preventDefault();

fetch(event.target.action, {
  method: 'POST',
  body: new URLSearchParams(new FormData(event.target))
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return (res.text());
    }).then((email) => {
      if (email === 'Invalid fullName' || email === 'Invalid companyUrl' || email === 'Invalid fullName and Invalid companyUrl') {
        return;
      }
      emailInformations[email] = email;
      const renderEmailList = () => {
        fullName.value = '';
        companyUrl.value = '';
        const emailInformationsHTML = Object.values(emailInformations).map(email => {
          return `<li class="guessed-email">
          <span class="guessed-email-text">${email}</span>
          </li>`;
        })
      emailList.innerHTML = emailInformationsHTML.join('');
      }
      renderEmailList();
    }).catch((err) => {
      console.log(err.message)
  });
});