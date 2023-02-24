import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const [productList, setProductList] = useState ([])
  
  useEffect(()=>{
    window
    .fetch('/api/avo')
    .then(response=>response.json())
    .then(({data, length})=>{
      setProductList(data)
    })
  },[])
  return (
    <div>
      <Navbar />
      <h1>Terrarios y Suculentas </h1>
      {productList.map((product)=>(
        <div>{product.id}</div>
    ))}
    </div>
  );
};

export default Home;
