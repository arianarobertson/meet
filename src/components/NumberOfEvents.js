import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;

        setCurrentNOE(value);
        let errorText;
        if (isNaN(value) || value <= 0) {
            errorText = "only positive number are valid";
            setErrorAlert(errorText);
        } else {
            errorText = "";
            setErrorAlert(errorText);
            setCurrentNOE(value);
        }
    };

    return (
        <div id="number-of-events">
            <input
                type="text"
                defaultValue="32"
                onChange={handleInputChanged}
                data-testid="numberOfEventsInput"
            />
        </div>
    );
};

export default NumberOfEvents;
