
export const functions = {

  formatMoney: (numberValue) => {

    if (typeof numberValue === 'number') {
      numberValue = numberValue.toString();
    }

    return parseFloat(numberValue)
      .toFixed(2) // casas decimais
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  },

  limit: (text, length) => {
    try {
      return text.length > length ? text.substr(0, length) + ' ...' : text;
    } catch (error) {
      // console.warn('Um erro ocorreu', error);
    }
  },

  ucwords: (text) => {
    text.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase() === undefined ? text : a.toUpperCase();
    });
  },

  validateCPF: (cpf) => {
    var sum;
    var leftover;


    sum = 0;
    if (cpf == "00000000000") return false;

    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    leftover = (sum * 10) % 11;

    if ((leftover == 10) || (leftover == 11)) leftover = 0;
    if (leftover != parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    leftover = (sum * 10) % 11;

    if ((leftover == 10) || (leftover == 11)) leftover = 0;
    if (leftover != parseInt(cpf.substring(10, 11))) return false;
    return true;

  },


  validateCNPJ: (cnpj) => {

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14)
      return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
      cnpj == "11111111111111" ||
      cnpj == "22222222222222" ||
      cnpj == "33333333333333" ||
      cnpj == "44444444444444" ||
      cnpj == "55555555555555" ||
      cnpj == "66666666666666" ||
      cnpj == "77777777777777" ||
      cnpj == "88888888888888" ||
      cnpj == "99999999999999")
      return false;

    // Valida DVs
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
      return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
      return false;

    return true;

  },

  maskCEP: (cep) => {
    cep = cep.replace(/\D/g, "");
    cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");

    return cep;
  },

  maskDocuments: (value) => {

    value = value.replace(/\D/g, '');
    if (value.length <= 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else {
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }

  },

  maskBirthDate: (date) => {
    date = date.replace(/\D/g, "");
    date = date.replace(/^(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")

    return date;
  },

  maskPhone: (phone) => {

    phone = phone.replace(/\D/g, "");
    phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2");
    phone = phone.replace(/(\d)(\d{4})$/, "$1-$2");

    return phone

  },

  maskCNPJ: (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }


}
