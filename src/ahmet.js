import React, { useEffect, useState } from 'react'

const Ahmet = (prop) => {


  //ACTION MODE = EDIT
  const [data, setData] = useState("rrrr");
  useEffect(() => {
    setData(prop.title + "x")
  }, []);

  return (
    <div>{data}</div>
  )
}
export default Ahmet;