import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 1,
    });

    const inputIsValid = userInput.duration > 0;

    const handleChange = (event, field) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                [field]: +event.target.value,
            };
        });
    };
    return (
        <div>
            <Header />
            <UserInput userInput={userInput} handleChange={handleChange}/>
            {inputIsValid ? 
            <Result userInput={userInput}/>
            :
            <p className="center">Please enter a duration greater than zero</p>
            }
            
        </div>
    );
}

export default App;
