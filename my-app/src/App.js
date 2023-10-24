import { useState } from "react";

function Calculator() {
  const [myInitialValue, setMyInitialValue] = useState(0);

  const handleInitialValueChange = (event) => {
    const value = Number(event.target.value);
    setMyInitialValue(value);
  };
  
  return (
    <>
      <h3>Calculator</h3>
      <div>
        Initial Value
        <input type="text" onChange={handleInitialValueChange} />
      </div>
      <div>
        Initial Value: {myInitialValue * 2}
      </div>
    </>
  );
}

export default Calculator;

//useEffect  warto sobie ogarrnąć

// Przycisk refresh do odświeżenia stronypoop