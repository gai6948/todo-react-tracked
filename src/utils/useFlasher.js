import { useEffect, useRef } from "react";
import '../components/App.css';

export const useFlasher = () => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.classList.add("flash");
    setTimeout(() => {
      ref.current.classList.remove("flash");
    }, 300);
  });
  return ref;
};
