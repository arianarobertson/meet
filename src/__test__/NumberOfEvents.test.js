import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import { render, within } from '@testing-library/react';
import App from '../App'

describe('<NumberOfEvents /> Component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(
            <NumberOfEvents setCurrentNOE={() => { }} />
        );
    });

    test('has the input textbox', () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    test('default number of events is 32', () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toHaveValue('32');
    });

    test('updates number of events when user types', async () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        await userEvent.type(input, '{backspace}{backspace}10');
        expect(input).toHaveValue('10');
    });
});

//  integration testing
describe('<NumberOfEvents /> integration', () => {
    test('user can change the number of events displayed', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
        const numberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
        await user.type(numberOfEventsInput, '{backspace}{backspace}10');

        const EventListDOM = AppDOM.querySelector('#event-list');

        const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
        expect(allRenderedEventItems.length).toEqual(10);
    });
});