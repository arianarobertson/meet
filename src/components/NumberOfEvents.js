const NumberOfEvents = ({ setCurrentNOE }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;

        let validationError = '';

        if (isNaN(value)) {
            validationError = 'value is not a number';
        } else if (value > 50) {
            validationError = 'maximum value is 50';
        } else if (value <= 0) {
            validationError = 'minimum value is 1';
        }

        if (!validationError) {
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
