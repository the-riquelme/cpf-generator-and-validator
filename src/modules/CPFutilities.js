//gera os primeiros 9 digitos do cpf, de maneira aleatoria
const generateRandomDigits = (min = 100000000, max = 999999999) => {
  return String(Math.floor(Math.random() * (max - min) + min));
}

//gera um digito identificador valido para o cpf incompleto fornecido
const generateDigit = (incompleteCPF) => {
  let total = 0;
  let reverse = incompleteCPF.length + 1;

  //conta para feita para obtencao de um digito valido
  for (let stringDigit of incompleteCPF) {
    total += reverse * Number(stringDigit);
    reverse--;
  }

  const digit = 11 - (total % 11);
  return digit <= 9 ? String(digit) : '0';
}

//formata o cpf, de acordo com o padrao
const format = (cpf) => {
  return (
    cpf.slice(0, 3) + '.' +
    cpf.slice(3, 6) + '.' +
    cpf.slice(6, 9) + '-' +
    cpf.slice(9, 11)
  );
}

//gera um cpf valido, retornando uma string
export function generateCPF() {
  const incompleteCPF = arguments[0] || generateRandomDigits();
  const digit1 = generateDigit(incompleteCPF);
  const digit2 = generateDigit(incompleteCPF + digit1);
  const validCPF = incompleteCPF + digit1 + digit2;
  return format(validCPF);
}

//verifica se um cpf e composto por uma sequencia
const isSequence = (cpf) => cpf.charAt(0).repeat(11) === cpf;

//verifica a validade de um cpf
export function validateCPF(cpf) {
  if (!cpf) return false;
  else if (typeof cpf !== 'string') return false;

  const cpfClean = cpf.replace(/\./g, '').replace('-', ''); //retira caracteres . e -
  if (cpfClean.length !== 11) return false;
  else if (isSequence(cpfClean)) return false;

  const incompleteCPF = cpfClean.slice(0, -2);
  const validCPF = generateCPF(incompleteCPF); //geracao de um cpf valido a partir do informado

  return validCPF === format(cpfClean); //verificacao de veracidade
}