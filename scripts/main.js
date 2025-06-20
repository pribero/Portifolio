document.addEventListener('DOMContentLoaded', () => {
  // Toggle modo escuro
  const btnToggleTheme = document.getElementById('btnToggleTheme');
  btnToggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Formulário
  const formContato = document.getElementById('form-contato');
  const resposta = document.getElementById('resposta');
  const submitBtn = document.querySelector('.submit-btn');

  formContato.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = formContato.nome.value.trim();
    const email = formContato.email.value.trim();
    const mensagem = formContato.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      alert('Preencha todos os campos certinho!');
      return;
    }

    // Feedback no botão
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      resposta.style.display = 'block';
      resposta.textContent = `Valeu pelo contato, ${nome}! Te respondo em breve.`;
      formContato.reset();
      submitBtn.textContent = 'Enviar';
      submitBtn.disabled = false;
    }, 1500);
  });

  // Animação foco inputs
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });

  // Menu modal
  const menuDialog = document.getElementById('menuDialog');
  window.openMenu = function() {
    if (menuDialog?.showModal) {
      menuDialog.showModal();
    } else {
      alert('Seu navegador não suporta menu modal.');
    }
  };
  window.closeMenu = function() {
    if (menuDialog?.close) {
      menuDialog.close();
    }
  };
});