async function getRickAndMortyCharacters() {
  // faz a requisição pra API e guarda a resposta
  const response = await fetch('https://rickandmortyapi.com/api/character');
  // interrompe o código em caso de erro
  if (!response.ok) return;
  // obtem o json da resposta
  const json = await response.json();

  // percorre o objeto json que veio da API
  const characters = json?.results?.map(({ name, gender, image, species }) => {
    // traduz a espécie
    let especie = species === 'Human' ? 'Humano' : 'Alienigena';
    // tratuz o gênero
    let genero = 'Desconhecido';
    if (gender === 'Male') {
      genero = 'Homem';
    }
    if (gender === 'Female') {
      genero = 'Mulher';
    }
    // retorna o novo objeto com as props do exercício
    return {
      nome: name,
      genero,
      avatar: image,
      especie,
    };
  });
  // loga o resultado
  console.log(characters);
  // retorna o resultado
  return characters;
}

module.exports = getRickAndMortyCharacters;
