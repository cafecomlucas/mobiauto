function checkIfTheFirstLetterIsUppercase(word) {
  // verifica se a palavra é indefinida ou vazia (se sim, retorna false)
  if (!word) {
    // loga o resultado
    console.log(false);
    // retorna o resultado
    return false;
  }
  // se a palavra for definida, continua...
  // guarda a primeira letra original
  const originalFirstLetter = word.charAt(0);
  // converte a cópia da primeira letra em uppercase
  const copyUppercaseFirstLetter = word.toUpperCase().charAt(0);
  // compara a primeira letra original com a cópia em uppercase
  isTheFirstLetterUppercase = originalFirstLetter === copyUppercaseFirstLetter;
  // loga o resultado
  console.log(isTheFirstLetterUppercase);
  // retorna o resultado
  return isTheFirstLetterUppercase;
}

module.exports = checkIfTheFirstLetterIsUppercase;
