import { useState } from "react";

export default function UserInput() {
    const [formValues, setFormValues] = useState({"initial":0,"annual":0,"expected":0,"duration":0});

    const handleUpdatedValues = (name, newValue) =>{
        setFormValues((prevValues)=>{
            const newValues = {...prevValues, [name]:newValue};
            return newValues;
        })
    }


  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">Initial Investment</label>
          <input min={0} id="initial" type="number" onChange={(e) => handleUpdatedValues("initial", e.target.value)} value={formValues["initial"]}/>
        </p>
        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input min={0} id="annual" type="number" onChange={(e) => handleUpdatedValues("annual", e.target.value)} value={formValues["annual"]}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected">expected return</label>
          <input min={0} id="expected" type="number" onChange={(e) => handleUpdatedValues("expected", e.target.value)} value={formValues["expected"]}/>
        </p>
        <p>
          <label htmlFor="duration">duration</label>
          <input min={0} id="duration" type="number" onChange={(e) => handleUpdatedValues("duration", e.target.value)} value={formValues["duration"]}/>
        </p>
      </div>
    </section>
  );
}
