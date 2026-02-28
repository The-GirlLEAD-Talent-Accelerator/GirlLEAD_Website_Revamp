import { useEffect, useState } from "react";


export function useCarousel(length, delay = 4000) {
const [index, setIndex] = useState(0);


useEffect(() => {
const interval = setInterval(() => {
setIndex((prev) => (prev + 1) % length);
}, delay);


return () => clearInterval(interval);
}, [length, delay]);


const next = () => setIndex((prev) => (prev + 1) % length);
const prev = () => setIndex((prev) => (prev - 1 + length) % length);


return { index, next, prev };
}