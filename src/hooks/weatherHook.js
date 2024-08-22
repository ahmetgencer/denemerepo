import React, { useEffect, useState } from 'react'
import axios from 'axios'

 const  UseWeatherHook = (city) => {
  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
     axios.get(`https://en.wikipedia.org/api/rest_v1/page/title/${city}`)
    .then((res) => {
      // console.log("aa");
      // return res.data.items[0].title;
  //  setTimeout(function() {
   
    setData(res.data.items[0].title);
  // },5000)
    })
    .catch(er => console.log(er));

    };
    fetchData();
  }, []);
  

  return data;
  // return city;
}

export default UseWeatherHook;