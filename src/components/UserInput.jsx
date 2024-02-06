import React, { useState } from "react";

function UserInput({userInput, handleChange}) {

    return (
        <div id="user-input">
            <form>
                <div className="input-group">
                    <div style={{ display: "block" }}>
                        <label htmlFor="init">INITIAL INVESTMENT</label>
                        <input
                            id="init"
                            type="number"
                            value={userInput.initialInvestment}
                            onChange={(e) => handleChange(e, 'initialInvestment')}
                        ></input>
                    </div>

                    <div style={{ display: "block" }}>
                        <label htmlFor="annual">ANNUAL INVESTMENT</label>
                        <input
                            id="annual"
                            type="number"
                            value={userInput.annualInvestment}
                            onChange={(e) => handleChange(e, 'annualInvestment')}
                        ></input>
                    </div>
                </div>

                <br />

                <div className="input-group">
                    <div style={{ display: "block" }}>
                        <label htmlFor="expect">EXPECTED RETURN</label>
                        <input
                            id="expect"
                            type="number"
                            value={userInput.expectedReturn}
                            onChange={(e) => handleChange(e, 'expectedReturn')}
                        ></input>
                    </div>

                    <div style={{ display: "block" }}>
                        <label htmlFor="duration">DURATION</label>
                        <input
                            id="duration"
                            type="number"
                            value={userInput.duration}
                            onChange={(e) => handleChange(e, 'duration')}
                        ></input>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserInput;
