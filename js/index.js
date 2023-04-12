const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const message = Object.create(null);
  message.text = e.target.message.value.trim();

  console.log(message);
});