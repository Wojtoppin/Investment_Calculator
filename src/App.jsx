import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [formValues, setFormValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = formValues.duration > 0;

  const handleUpdatedValues = (name, newValue) => {
    setFormValues((prevValues) => {
      const newValues = { ...prevValues, [name]: +newValue };
      return newValues;
    });
  };

  return (
    <>
      <UserInput
        formValues={formValues}
        handleUpdatedValues={handleUpdatedValues}
      />
      {inputIsValid ? (
        <Result formValues={formValues} />
      ) : (
        <p>Please enter a duration greater than zero</p>
      )}
    </>
  );
}

export default App;
