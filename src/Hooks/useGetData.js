import axios from "axios";
import { useEffect, useState } from "react"


export const useGetData = (url = 'https://api.thecatapi.com/v1/images/search/') => {
    const [data, setData] = useState([])
    const renderData = () => {
        axios.get(url)
    .then(response => {
      setData(response.data[0]);
      // console.log(response.data);
    })
    .catch(error => {
      console.log(error.message);
      return [];
    })
    }

    useEffect(() => {
        renderData();
    }, []);

      return { data, renderData };
}
