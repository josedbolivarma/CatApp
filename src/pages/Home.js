import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ButtonPrimary } from '../styled/styledcomponents';

// Hooks
import { useGetData } from '../Hooks/useGetData';
import { useLocalStorage } from '../Hooks/useLocalStorage';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '90%',
      margin: '1rem auto',
      display: 'flex',
      height: '80vh',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      }
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1)
    },
    cover: {
      width: '100%',
      height: '100%',
    },
    controls: {
      width: '90%',
      margin: '1rem auto',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1)
    }
  }),
);

const Home = () => {
  const classes = useStyles();
  const { data, renderData } = useGetData('https://api.thecatapi.com/v1/images/search/');

  const [storedValue, setValue] = useLocalStorage('favoritos', []);

// setFavorito(data.id, data.url)
  console.log(data, 'dataaaaa');
  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
          <Typography align='center' component="h2" variant="h5"><b>Todos los gatos</b></Typography>
            <Typography component="h5" variant="h5"  >
              Un gato para todos los gustos
            </Typography>
          </CardContent>
          
          <div className={classes.controls}>

            <ButtonPrimary variant="contained" color="secondary"
            onClick={() => setValue(data.id, data.url)}
            >
              <FavoriteIcon
              />Favorito
            </ButtonPrimary>
            <ButtonPrimary
              variant="contained" color="primary"
              onClick={() => renderData()}
            >
              Siguiente Gato!
            </ButtonPrimary>
          </div>
        </div>

        <CardMedia
          className={classes.cover}
          image={data.url}
          height={data.height}
          width={data.width}
          title="Live from space album cover"
        />

      </Card>
    </div>
  )
}

export default Home