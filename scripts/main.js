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

// Form interactions
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
      input.addEventListener('focus', function() {
          this.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', function() {
          this.parentElement.classList.remove('focused');
      });
  });

  // Form submission feedback
  const form = document.querySelector('form');
  const submitBtn = document.querySelector('.submit-btn');
  
  form.addEventListener('submit', function(e) {
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      // Reset after 3 seconds (for demo purposes)
      setTimeout(() => {
          submitBtn.textContent = 'Enviar';
          submitBtn.disabled = false;
      }, 3000);
  });
});


const menuDialog = document.getElementById('menuDialog');
  if (menuDialog.open) {
    menuDialog.close();
  }