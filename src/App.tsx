import styled from "@emotion/styled";
import InputForm from "./components/InputForm";
import { useBmiCalculator } from "./hooks/useBmiCalculator";
import TextFieldArea from "./components/TextFIeldArea";

const MainWrapp = styled.main`
  /* height: 100vh; */
  width: 100%;
  width: -moz-fit-content;
  max-width: 600px;
  /* max-width: 250px; */
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  padding: 1rem;
`;

function App() {
  const {
    valueLabelFormat,
    kgValue,
    cmValue,

    changeHandler,
    outputValue,
  } = useBmiCalculator();

  return (
    <MainWrapp>
      <InputForm
        changeHandler={changeHandler}
        kgValue={kgValue}
        valueLabelFormat={valueLabelFormat}
        cmValue={cmValue}
      />
      <TextFieldArea outputValue={outputValue} />
    </MainWrapp>
  );
}

export default App;
