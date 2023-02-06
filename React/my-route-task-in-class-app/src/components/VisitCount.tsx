import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const VisitCount = () => {
  const [count, setCount] = useState(1);
  const { pathname } = useLocation();

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
  }, [pathname]);

  return <p>{count}</p>;
};
