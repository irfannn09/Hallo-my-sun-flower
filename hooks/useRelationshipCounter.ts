"use client";

import { useEffect, useState } from "react";
import { RELATIONSHIP_START_DATE } from "../constants";

interface Counter {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useRelationshipCounter(startDate: string = RELATIONSHIP_START_DATE) {
  const [counter, setCounter] = useState<Counter>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function tick() {
      const start = new Date(startDate).getTime();
      const diff = Math.max(0, Date.now() - start);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCounter({ days, hours, minutes, seconds });
    }

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  return counter;
}
