import { useEffect, useState } from 'react';

export function useClock(timeZone: string) {
  const format = () =>
    new Date().toLocaleTimeString('es-EC', {
      timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    });
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}
