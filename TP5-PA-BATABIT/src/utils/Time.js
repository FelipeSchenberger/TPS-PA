import { useEffect, useState } from 'react';

export default function Time() {
  const [time, setTime] = useState('');

  useEffect(() => {
      const tiempoActual = new Date().toLocaleTimeString('ar-AR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(tiempoActual);
    }, []);

  return time;
}
