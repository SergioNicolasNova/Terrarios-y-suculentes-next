import React from "react";
import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  return <div>este es el nombre del usuario: {router.query.Nombre}</div>;
};

export default Name;
