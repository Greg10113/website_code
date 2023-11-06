import PokeCard from './PokeCard';

async function getData(id) {
  //   const id = Math.floor(Math.random() * 150) + 1;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}/`
    //   , {
    //     cache: 'no-store',
    //   }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function GetPoke({ num }) {
  const data = await getData(num);

  return (
    <PokeCard
      img={data.sprites.front_default}
      name={data.name}
      exp={data.base_experience}
      type={data.types[0].type.name}
    />
  );
}
