function maskify(string, charactersToShow = 4) {
  // guarda os últimos digitos
  const lastCharacters = string.slice(-charactersToShow);
  // acrescenta os caracteres '#' com base no tamanho da string original
  const maskedNumber = lastCharacters.padStart(string.length, '#');
  // loga o resultado
  console.log('maskedNumber: ', maskedNumber);
  // retorna o resultado
  return maskedNumber;
}

module.exports = maskify;
