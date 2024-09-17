import { useState } from "react";

export default function UserInput() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 100,
        annualInvestment: 100,
        expectedReturn: 5, 
        duration: 5,
    });


    function handleInput(inputID, value) {
        setUserInput((prevUserInput)=> {
            return {
                ...prevUserInput,
                [inputID] : value
            }
        });
    }

    return (
        <div id="user-input">
            <div className="input-group">
                <div> 
                    <label> Initial Investment </label>
                    <input type="number" required/>

                    <label> Annual Investment </label>
                    <input type="number" required/>
                </div>
                <div>
                    <label> Expected Return </label>
                    <input type="number" required/>

                    <label> Duration </label>
                    <input type="number" required/>
                </div>
            </div>
        </div>
    );
}