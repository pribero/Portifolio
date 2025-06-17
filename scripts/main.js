function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if(nome && email && mensagem) {
    document.getElementById('resposta').style.display = 'block';
    document.getElementById('resposta').textContent = `Valeu pelo contato, ${nome}! Te respondo em breve.`;
    this.reset();
  } else {
    alert('Preencha todos os campos certinho!');
  }
});