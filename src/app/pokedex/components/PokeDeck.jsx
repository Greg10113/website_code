'use client';
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GetPoke from './GetPoke';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PokeDeck({ num }) {
  let i = 1;
  return (
    <div>
      <div className="grow w-5/6 m-auto align-center">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 20, sm: 20, md: 20 }}
        >
          {Array.from(Array(num)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <GetPoke num={i++} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
