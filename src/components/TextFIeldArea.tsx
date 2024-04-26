import { inputBaseClasses, outlinedInputClasses, styled } from "@mui/material";
import TextField from "@mui/material/TextField";

const DisabledTextField = styled(TextField)(() => ({
  [`& .${inputBaseClasses.input}.${outlinedInputClasses.input}`]: {
    color: "red",
    fontWeight: 600,
    textAlign: "center",
    "&.Mui-disabled": {
      "-webkit-text-fill-color": "red",
    },
  },
}));

interface TextFieldAreaProps {
  outputValue: string;
}

const TextFieldArea = ({ outputValue }: TextFieldAreaProps) => {
  return (
    <DisabledTextField
      disabled
      id="outlined-read-only-input"
      defaultValue="Hello World"
      InputProps={{
        readOnly: true,
      }}
      value={`Your BMI: ${outputValue}`}
    />
  );
};

export default TextFieldArea;
