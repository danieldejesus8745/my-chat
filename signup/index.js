const form = document.getElementById('form');
const url = 'http://localhost:8080/api/v1/users';
const modalPositiveFeedback = document.getElementById('modalPositiveFeedback');
const modalNegativeFeedback = document.getElementById('modalNegativeFeedback');
const closeNegativeFeedback = document.getElementById('closeNegativeFeedback');

form.addEventListener('submit', e => {
  e.preventDefault();

  const user = Object.create(null);
  user.name = e.target.name.value.trim();
  user.email = e.target.email.value.trim();
  user.password = e.target.password.value.trim();

  addUser(user);
});

closeNegativeFeedback.addEventListener('click', () => {
  modalNegativeFeedback.style.display = 'none';
});

function addUser(user){
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(user)
  }

  fetch(url, options)
  .then(response => {
    if (response.status === 201) {
      modalPositiveFeedback.style.display = 'flex';
    }

    if (response.status === 409) {
      modalNegativeFeedback.style.display = 'flex';
    }
  });
}