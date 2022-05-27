import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ListCard } from '../styled/styledcomponents'

const Listado = () => {
   const [favsData, setFavsData] = useState([])

   useEffect(() => {
      const getFavs = () => {
         const favs = localStorage.getItem("favoritos");
         setFavsData(favs)
      };
      getFavs()
   }, [])

   console.log(favsData);

   if (!favsData) return (
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
         <h1>Favoritos</h1>
         <ListCard>
            <img src={favsData.url} alt={favsData.url} />
         </ListCard>
      </div>
   )
}

export default Listado