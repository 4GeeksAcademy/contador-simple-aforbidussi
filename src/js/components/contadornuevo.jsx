import React, { useEffect, useState } from "react";

const ContadorNuevo = () => {
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo((prev) => (prev < 99999 ? prev + 1 : 0));
    }, 1000);

    if (tiempo === 10) {
      alert("¡Enhorabuena, alcanzaste tu tiempo!");
    }

    return () => clearInterval(intervalo);
  }, [tiempo]);

  const cinco = Math.floor(tiempo / 10000) % 10;
  const cuatro = Math.floor(tiempo / 1000) % 10;
  const tres = Math.floor(tiempo / 100) % 10;
  const dos = Math.floor(tiempo / 10) % 10;
  const uno = tiempo % 10;

  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center">
        <div className="bigCounter d-flex bg-black text-white p-4 gap-3 my-5 rounded shadow-lg fs-1 fw-bold">
          <div className="clock-icon"><i className="far fa-clock"></i></div>
          <div className="box">{cinco}</div>
          <div className="box">{cuatro}</div>
          <div className="box">{tres}</div>
          <div className="box">{dos}</div>
          <div className="box">{uno}</div>
        </div>
      </div>
    </div>
  );
};

export default ContadorNuevo;