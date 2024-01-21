import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  function convertToPascalCase(inputString) {
    // Dividir el string en palabras
    const words = inputString.split(/\s+/);
  
    // Convertir cada palabra a Pascal Case
    const pascalCaseWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  
    // Unir las palabras con un espacio
    const pascalCaseString = pascalCaseWords.join(' ');
  
    return pascalCaseString;
  }

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newCategory = convertToPascalCase(inputValue.trim());
    
    if ( newCategory.length <= 1 ) return;

    /* newCategory( categories => [ inputValue, ...categories ]); */
    onNewCategory( newCategory );
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Search Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
