const form = document.getElementById('form');
const url = 'http://localhost:8081/api/v1/authentication';

form.addEventListener('submit', e => {
  e.preventDefault();

  const credentials = btoa(
    `${e.target.email.value.trim()}:${e.target.password.value.trim()}`
  )

  authenticateUser(credentials);
});

function authenticateUser(credentials) {
  const options = {
    headers: {
      'Authentication': `Basic ${credentials}`,
      'Accept': 'application/json'
    },
    method: 'GET'
  }

  fetch(url, options)
  .then(response => {
    if (response.status === 404) {
      alert('Usuário onão encontrado');
    }

    if (response.status === 401) {
      alert('Usuário ou senha inválida');
    }
  })
  .then(response => response.text())
  .then(response => console.log(response))
  .catch(error => console.log(error));
}