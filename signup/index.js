const form = document.getElementById('form');
const url = 'http://localhost:8080/api/v1/users';

form.addEventListener('submit', e => {
  e.preventDefault();

  const user = Object.create(null);
  user.name = e.target.name.value.trim();
  user.email = e.target.email.value.trim();
  user.password = e.target.password.value.trim();

  addUser(user);
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
      alert('Conta criada com sucesso');
      location.href = '../login/';
    } else if (response.status === 409) {
      alert('O e-mail informado já está sendo usado por outra conta');
    } else {
      alert('Erro ao tentar criar conta. Por favor, entre em contato com o suporte');
    }
  })
}