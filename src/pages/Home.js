import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: 400
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 500,
    },
    controls: {
      paddingLeft: theme.spacing(),
      paddingBottom: theme.spacing(2),
    }
  }),
);

const Home = () => {

  const classes = useStyles();
  const [data, setData] = useState([])

  const peticionGet = () => {
    const url = 'https://api.thecatapi.com/v1/images/search'
    axios.get(url)
      .then(response => {
        setData(response.data[0])
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  useEffect(() => {
    peticionGet()
  }, [])


  const setFavorito = (id, url) => {
    const a = JSON.parse(localStorage.getItem("favoritos")) || []
    console.log(a);
    const b = a.push({ id, url });
    console.log(b);
    localStorage.setItem("favoritos", JSON.stringify(b));
  }

  return (
    <div>
      <h1>Todos los gatos</h1>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5"  >
              Un gato para todos los gustos
            </Typography>
          </CardContent>
          <div className={classes.controls}>

            <Button variant="contained" color="secondary" >
              <FavoriteIcon
                onClick={() => setFavorito(data.id, data.url)}
              />Favorito
            </Button>
            <br />
            <Button
              variant="contained" color="primary"
              onClick={() => peticionGet()}
            >
              Siguiente Gato!
            </Button>
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