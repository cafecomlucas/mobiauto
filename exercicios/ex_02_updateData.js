function updateData(currentObject, newDataObject) {
  // objeto pra guardar as props atualizadas
  const updatedProps = {};
  // percorre o objeto original
  Object.keys(currentObject).map((key) => {
    // verifica se a chave atual do objeto original existe no novo objeto
    if (newDataObject.hasOwnProperty(key)) {
      // se sim, guarda a prop e o valor no objeto `updatedProps`
      updatedProps[key] = newDataObject[key];
    }
  });
  // cria o objeto atualizado, sobrescrevendo as props
  const updatedObject = { ...currentObject, ...updatedProps };
  // loga o objeto atualizado
  console.log(updatedObject);
  // retorna o objeto atualizado
  return updatedObject;
}

module.exports = updateData;
