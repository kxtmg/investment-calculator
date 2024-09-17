export default function UserInput({ onInput, userInput }) {

    return (
        <div id="user-input">
            <div className="input-group">
                <div> 
                    <label> Initial Investment </label>
                    <input 
                    required
                    type="number"  
                    value={userInput.initialInvestment}
                    onChange={(event) =>
                        onInput("initialInvestment", event.target.value)
                        }
                    />
                    <label> Expected Return </label>
                    <input 
                    required
                    type="number"  
                    value={userInput.expectedReturn}
                    onChange={(event) =>
                        onInput("expectedReturn", event.target.value)
                        }
                    />
                </div>
                <div>
                    <label> Annual Investment </label>
                    <input 
                    required
                    type="number"  
                    value={userInput.annualInvestment}
                    onChange={(event) =>
                         onInput("annualInvestment", event.target.value)
                        }
                    />
                    <label> Duration </label>
                    <input 
                    required
                    type="number"  
                    value={userInput.duration}
                    onChange={(event) =>
                        onInput("duration", event.target.value)
                        }
                    />
                </div>
            </div>
        </div>
    );
}