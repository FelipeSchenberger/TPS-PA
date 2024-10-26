import { useState, useEffect } from "react";

export default function useApi() {
  const [api, setApi] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,cardano,solana')
      .then((response) => {
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        return response.json();
      })
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setApi(data.data);
        } else {
          throw new Error('Estructura de datos inesperada');
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos de criptomonedas:', error);
        setError(error.message);
      });
  }, []);

  return { api, error };
}
