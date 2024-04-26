import styled from "@emotion/styled";

import Slider from "@mui/material/Slider";

const InputWrapp = styled.div`
  max-width: 600px;
  width: 100%;
`;

interface InputFormProps {
  changeHandler: (action: "kg" | "cm", value: number) => void;

  valueLabelFormat: (measure: string) => string;
  cmValue: number;
  kgValue: number;
}
const InputForm = ({
  changeHandler,
  cmValue,
  kgValue,
  valueLabelFormat,
}: InputFormProps) => {
  return (
    <InputWrapp>
      <Slider
        style={{
          margin: "30px",
          maxWidth: "600px",
          width: "-webkit-fill-available",
        }}
        min={0}
        step={5}
        max={120}
        value={kgValue}
        onChange={(e, kgValue) => changeHandler("kg", kgValue as number)}
        valueLabelFormat={() => valueLabelFormat("kg")}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
      <Slider
        style={{
          margin: "30px",
          maxWidth: "600px",
          width: "-webkit-fill-available",
        }}
        min={1}
        step={1}
        max={220}
        value={cmValue}
        onChange={(e, value) => changeHandler("cm", value as number)}
        valueLabelFormat={() => valueLabelFormat("cm")}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </InputWrapp>
  );
};

export default InputForm;
