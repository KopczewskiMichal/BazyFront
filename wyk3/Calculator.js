import {useState} from "react"

function Calculator() {

  const [myInitialValue, setMyInitialValue] = useState();
  let initialValue = 0;

  const handleInitialValueChange = (event)  => {
    console.log(event.target.value)
    initialValue = event.target.value;



  };
  
  return (
    <>
      <h3>Calculator</h3>
      <div>initialValue;
      <input type="text" onVolumeChange={handleInitialValueChange}></input>
      </div>
      <div>initialValue: {myInitialValue * 2}
      </div>
    </>

  )

}