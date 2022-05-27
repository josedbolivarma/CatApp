// export const setFavorito = (id, url) => {
//     const a = JSON.parse(localStorage.getItem("favoritos")) || []
//     console.log(a, 'Favorito Parse GetItem');
//     const b = a.push({ id, url });
//     console.log(b, 'B A.PUSH(ID, URL)');
//     localStorage.setItem("favoritos", JSON.stringify(b));
//   }

import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const value = window.localStorage.getItem(keyName);
  
        if (value) {
          console.log('VALUE', value);
          return JSON.parse(value);
        } else {
          window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
          return defaultValue;
        }
      } catch (err) {
        return defaultValue;
      }
    });
  
    const setValue = (id, url) => {
        const obj = {
            id,
            url
        }
    
      try {
        let filtrado = storedValue.filter(item => item.id == id);
        console.log(filtrado, 'FILTRADO NOJODA')
        if(filtrado[0]) {
          console.log('EL ID CONCUERDA CON: ', filtrado);
        } else {
          const newValue = [...storedValue, obj];
          setStoredValue(newValue);
          window.localStorage.setItem(keyName, JSON.stringify(newValue));
        }
        
      } catch (err) {
          console.log(`Error: ${err}`);
      }
    
    };
  
    return [storedValue, setValue];
  };