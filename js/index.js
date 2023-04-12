const form = document.getElementById('form');
let id = localStorage.getItem('id') || 1;
const ulMessages = document.getElementById('ulMessages');

form.addEventListener('submit', e => {
  e.preventDefault();

  const message = Object.create(null);
  message.text = e.target.message.value.trim();

  addMessage(message);
  form.reset();
  loadMessages();
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
  const messages = getMessages();

  ulMessages.innerHTML = '';

  messages.forEach(message => {
    const li = document.createElement('li');
    li.textContent = message.text;
    ulMessages.append(li);
  });
}

loadMessages();