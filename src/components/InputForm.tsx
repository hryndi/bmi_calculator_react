import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

import Slider from "@mui/material/Slider";

const InputWrapp = styled.div`
  max-width: 600px;
  width: 100%;
`;

const StyledTypography = styled(Typography)`
  margin-left: 2rem;
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
      <StyledTypography variant="h5" fontWeight={700}>
        Your Weight (kg)
      </StyledTypography>
      <Slider
        style={{
          margin: "30px",
          marginTop: "10px",
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
      <StyledTypography variant="h5" fontWeight={600}>
        Your Height (cm)
      </StyledTypography>
      <Slider
        style={{
          margin: "30px",
          marginTop: "10px",
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
