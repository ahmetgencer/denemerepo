import React, { useEffect, useState } from 'react'

const Mehmet = (prop) => {

  

  const [data, setData] = useState("vvvv");
  useEffect(() => {
    setData(prop.title + "y")
  }, []);

  return (
  <>
    <div>{data}</div>
    <button onClick={prop.func("ahmet")}>button</button>
  </>
  )
}
export default Mehmet;