import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../Hooks/useLocalStorage'
import { ListCard } from '../styled/styledcomponents'

// MakeStyles
import { makeStyles } from '@material-ui/core';

const Listado = () => {
   const classes = useStyles();
   const [favsData, setFavsData] = useState([])
   const [storedValue] = useLocalStorage('favoritos', []);

   console.log(storedValue, 'Store Value');

   if (!storedValue) return (
      <div>
         <h1>Favoritos</h1>
         <h1>Aun no tienes favoritos</h1>
         <img src="https://c.tenor.com/PIs64JMGjDcAAAAd/sad-cat.gif" alt="sadcat" />
         <br />
         <Button
            as={Link}
            to="/"
            variant="contained" color="primary"
         >
            volver
         </Button>
      </div>
   )

   //// falta map imagwenes favs
   return (
      <div>
         <div className={classes.list__container}>
         <h1>Favoritos</h1>
         <div className={classes.list__gallery}>

         {
            storedValue.map((item) => (
                  <img className={classes.list__image} src={item.url} alt={item.url} />
            ))
         }
         </div>
         </div>
      </div>
   )
}

const useStyles = makeStyles((theme) => ({
   list__container: {
      width: '94%',
      margin: '2rem auto'
   },
   list__gallery: {
      columns: '5 320px',
      columnGap: '0.5em'
   },
   list__image: {
      width: '100%',
      maxWidth: '100%',
      marginBottom: '0.5em',
      display: 'block',
      outline: '2px solid #FFF',
   }
}))

export default Listado