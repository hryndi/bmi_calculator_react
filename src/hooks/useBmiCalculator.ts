import { useState, useMemo, useEffect } from "react";

export const useBmiCalculator = () => {
  const [kgValue, setKgValue] = useState<number>(70);
  const [cmValue, setCmValue] = useState<number>(160);

  const changeHandler = (action: "kg" | "cm", value: number) => {
    switch (action) {
      case "kg":
        setKgValue(value);
        break;
      case "cm":
        setCmValue(value);
        break;
      default:
        break;
    }
  };

  const outputValue = useMemo(
    () => (kgValue / ((cmValue / 100) * (cmValue / 100))).toFixed(1),
    [cmValue, kgValue]
  );

  function valueLabelFormat(mesurance: string) {
    switch (mesurance) {
      case "kg":
        return `${kgValue} kg`;
      case "cm":
        return `${cmValue} cm`;
      default:
        return "";
    }
  }

  useEffect(() => {
    console.log(outputValue);
  }, [outputValue]);

  return {
    valueLabelFormat,
    kgValue,
    cmValue,
    changeHandler,
    outputValue,
  };
};
