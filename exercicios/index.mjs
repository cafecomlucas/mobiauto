import maskify from './ex_01_maskify.js';
import updateData from './ex_02_updateData.js';
import getRickAndMortyCharacters from './ex_03_getRickAndMortyCharacters.js';
import checkIfTheFirstLetterIsUppercase from './ex_04_checkIfTheFirstLetterIsUppercase.js';

(async () => {
  
  /* Ex 01 - Maskify 
  ********************************************************************************************************************************************/
  console.log('-'); 
  console.log('--------- [ Ex 01 - Maskify ] ---------'); 

  maskify('123456'); // Saída ##3456
  maskify('1'); // Saída 1
  maskify(''); // Saída ''
  maskify('Nanananananan Batman'); // Saída ################tman
  // [ Extra ] quantidade de letras customizada no segundo argumento
  maskify('ABCD', 2); // Saída ##CD

  console.log('---- FIM Ex 01 ----'); 
  console.log('-'); 


  /* Ex 02 - Update Data
  ********************************************************************************************************************************************/
  console.log('-'); 
  console.log('--------- [ Ex 02 - Update Data ] ---------'); 

  updateData({ name: 'Marco', age: 35 }, { name: 'Lucas' });
  // Saída: { name: Lucas, age: 35 }
  updateData({ product: 'PC' }, { age: 35 });
  // Saída: { product: 'PC' }

  console.log('---------- FIM Ex 02 ----------'); 
  console.log('-'); 


  /* Ex 03 - Get Rick And Morty Characters
  ********************************************************************************************************************************************/
  console.log('-'); 
  console.log('--- [ Ex 03 - Get Rick And Morty Characters ] ---');

  await getRickAndMortyCharacters()
  /* Saída:
  [
    {
      nome: 'Rick Sanchez',
      genero: 'Homem',
      avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      especie: 'Humano'
    },
    ...
    {
      nome: 'Summer Smith',
      genero: 'Mulher',
      avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      especie: 'Humano'
    },
    ...
    {
      nome: 'Alien Googah',
      genero: 'Desconhecido',
      avatar: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
      especie: 'Alienigena'
    },
    ...
  ] */
    
  console.log('---------- FIM Ex 03 ----------'); 
  console.log('-'); 

  /* Ex 04 - Check if the first letter is Uppercase
  ********************************************************************************************************************************************/
  console.log('-'); 
  console.log('--- [ Ex 04 - Check if the first letter is Uppercase ] ---'); 

  checkIfTheFirstLetterIsUppercase('Lucas'); // Saída: true
  checkIfTheFirstLetterIsUppercase('Abc'); // Saída: true
  checkIfTheFirstLetterIsUppercase('xPto'); // Saída: false
  checkIfTheFirstLetterIsUppercase(''); // Saída: false
  checkIfTheFirstLetterIsUppercase(); // Saída: false

  console.log('---------- FIM Ex 04 ----------'); 
})();