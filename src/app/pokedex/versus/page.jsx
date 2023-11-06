'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from '../components/PokeCard';
import Grid from '@mui/material/Grid';
export default function Versus() {
  const [playerPokes, setplayerPokes] = useState([]);
  const pokemans = ['', '', '', '', '', ''];
  const [playerPoke1, setplayerPoke1] = useState(null);
  const [playerPoke2, setplayerPoke2] = useState(null);
  const [playerPoke3, setplayerPoke3] = useState(null);

  const [compPoke1, setCompPoke1] = useState(null);
  const [compPoke2, setCompPoke2] = useState(null);
  const [compPoke3, setCompPoke3] = useState(null);

  let randPoke = Math.floor(Math.random() * 150) + 1;

  let player = 0;
  let compPoke = 0;
  let isWinner = false;

  pokemans.map((p) => {
    return useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randPoke}`)
        .then((response) => {
          setplayerPokes(playerPokes.push(response.data));
        });
    }, []);
  });
  if (!playerPokes) return null;

  return (
    <div>
      <div className="grow w-5/6 m-auto align-center">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 20, sm: 20, md: 20 }}
        >
          {playerPokes.map((p) => {
            <PokeCard
              img={p.sprites.front_default}
              name={p.name}
              exp={p.base_experience}
              type={p.types[0].type.name}
            />;
          })}
        </Grid>
      </div>
    </div>
  );
}
