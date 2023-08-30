import { useState } from "react";
import BillInput from "./BillInput";
import PercentageRate from "./PercentageRate";
import "../styles.css";
import Output from "./Output";
import Reset from "./Reset";

export default function App() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div className="App">
      <BillInput bill={bill} onSetBill={setBill} />
      <PercentageRate percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </PercentageRate>
      <PercentageRate percentage={percentage2} onSelect={setPercentage2}>
        {" "}
        How did your friend like the service?
      </PercentageRate>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
