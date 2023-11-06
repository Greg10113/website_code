import * as React from 'react';
import Box from '@mui/material/Box';
import '../PokeCard.css';

export default function PokeCard({ img, name, exp, type }) {
  return (
    <Box className="pokeCard">
      <img src={img} alt="" />
      <div className="poke-info pb-10">
        <h2>{name}</h2>
        <h3>Type: {type}</h3>
        <h4>Exp: {exp}</h4>
      </div>
    </Box>
  );
}
