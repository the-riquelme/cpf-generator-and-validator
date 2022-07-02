//modulos para ativacao recurso atuais em navegadores antigos
import 'core-js/stable';
import 'regenerator-runtime/runtime';

//modulos a serem carregados pelo webpack
import { generateCPF, validateCPF } from './modules/CPFutilities';
import './assets/css/style.css';

(function () {
  const input = document.querySelector('#entry-out');
  const generationButton = document.querySelector('#generation-button');
  const validationButton = document.querySelector('#validation-button');

  input.addEventListener('keyup', function () { input.style.color = 'black'; });

  generationButton.addEventListener('click', function () {
    input.value = generateCPF();
    input.style.color = 'green';
  });

  validationButton.addEventListener('click', function () {
    const cpf = input.value;
    if (validateCPF(cpf)) input.style.color = 'green';
    else input.style.color = 'red';
  });
})();