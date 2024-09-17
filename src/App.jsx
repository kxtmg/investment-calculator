import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultTable from "./components/ResultTable.jsx";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 5, 
    duration: 2,
  });

  const validInput = userInput.duration >= 1;

  function handleInput(inputID, value) {
    setUserInput((prevUserInput)=> {
        return {
            ...prevUserInput,
            [inputID] : +value // Forces conversion to numeric value
        }
    });
  }

  return (
    <>
        <Header/>
        <UserInput userInput={userInput} onInput={handleInput} />
        {!validInput && (<p className="center"> Please enter a duration greater than 0</p>)}
        {validInput && <ResultTable userInput={userInput}/>}
    </>
  )
}

export default App