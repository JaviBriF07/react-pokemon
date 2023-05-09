import React, { useEffect, useState } from 'react';
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState({});
  const [ search, setSearch] = useState('')

  const handleText = (e)=>{
    setSearch(e.target.value).to
    
  }
  console.log(search)
  //DIDMount
 /*useEffect(() => {
    setIsLoading(true);
    // aqui hago la peticion
    fetch(baseUrl+search)
      .then((response) => response.json())
      .then((data) => {
        setCharacter({
          name: data.name,
          img: data.sprites.front_default,
        });
        setIsLoading(false);
      });
  }, []);*/

  const searchPokemon = () => {
    setIsLoading(true);
    // aqui hago la peticion
    fetch(baseUrl+search)
      .then((response) => response.json())
      .then((data) => {
        setCharacter({
          name: data.name,
          img: data.sprites.front_default,
        });
        setIsLoading(false)
  });
}

  return (
    <div>
      <input onChange={handleText}/>
      <button onClick={searchPokemon}>Buscar</button>
      {isLoading && <p>loading...</p>}
      {!isLoading && (
        <>
          <p>{character.name}</p>
          <img src={character.img} />
        </>
      )}
    </div>
  );
}
