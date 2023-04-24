const form = document.getElementById('form');
const url = 'http://localhost:8080/api/v1/users';

form.addEventListener('submit', e => {
  e.preventDefault();

  const user = Object.create(null);
  user.name = e.target.name.value.trim();
  user.email = e.target.email.value.trim();
  user.password = e.target.password.value.trim();

  addUser(user);
  form.reset();
});

function addUser(user){
  const headers = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(user)
  }

  fetch(url, headers)
  .then(response => {
    if (response.status === 201) {
      alert('Usuário cadastrado com sucesso!');
    }
  });
}