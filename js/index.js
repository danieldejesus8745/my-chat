const form = document.getElementById('form');
let id = localStorage.getItem('id') || 1;
const ulMessages = document.getElementById('ulMessages');
let contactNumber = 0;

form.addEventListener('submit', e => {
  e.preventDefault();

  if (contactNumber !== 0) {
    const message = Object.create(null);
    message.contact = contactNumber;
    message.text = e.target.message.value.trim();
    message.author = 1;

    addMessage(message);
    form.reset();
    loadMessages();
  } else {
    alert('Selecione um contato');
  }
});

function addMessage(message) {
  message.id = Number(id);
  id++;
  let messages = getMessages();
  messages.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));
  localStorage.setItem('id', id);
}

function getMessages() {
  return JSON.parse(localStorage.getItem('messages')) || [];
}

function loadMessages() {
  ulMessages.innerHTML = '';

  if (contactNumber !== 0) {
    const messages = getMessages();
    const filteredMessage = messages
    .filter(message => message.contact === contactNumber);

    filteredMessage.forEach(message => {
      const li = document.createElement('li');
      li.textContent = message.text;
      message.author == 1
      ? li.classList.add('text-to-left')
      : li.classList.add('text-to-rigth');
      ulMessages.append(li);
    });
  }
}

loadMessages();

function setContactNumber(contactId) {
  contactNumber = contactId;
  loadMessages();
}