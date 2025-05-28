export default function UserInput({ formValues, handleUpdatedValues }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">Initial Investment</label>
          <input
            required
            min={0}
            id="initial"
            type="number"
            onChange={(e) =>
              handleUpdatedValues("initialInvestment", e.target.value)
            }
            value={formValues["initialInvestment"]}
          />
        </p>
        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input
            required
            min={0}
            id="annual"
            type="number"
            onChange={(e) =>
              handleUpdatedValues("annualInvestment", e.target.value)
            }
            value={formValues["annualInvestment"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected">expected return</label>
          <input
            required
            min={0}
            id="expected"
            type="number"
            onChange={(e) =>
              handleUpdatedValues("expectedReturn", e.target.value)
            }
            value={formValues["expectedReturn"]}
          />
        </p>
        <p>
          <label htmlFor="duration">duration</label>
          <input
            required
            min={0}
            id="duration"
            type="number"
            onChange={(e) => handleUpdatedValues("duration", e.target.value)}
            value={formValues["duration"]}
          />
        </p>
      </div>
    </section>
  );
}
