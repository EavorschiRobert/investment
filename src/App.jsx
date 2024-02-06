import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });
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
            <Result userInput={userInput}/>
        </div>
    );
}

export default App;
