import { render, screen, fireEvent } from "@testing-library/react";
import { StringAdder } from "../components/StringAdder"

it('should start with empty string', () => {
    render(<StringAdder />)

    const string = document.querySelector('p');
    expect(string).toHaveTextContent("The module says:")
})

it('should display greeting when button is pressed', () => {
    render(<StringAdder />)

    expect(document.querySelector('p')).toHaveTextContent("The module says:");

    fireEvent.click(screen.getByText('Hello'));

    expect(document.querySelector('p')).toHaveTextContent("The module says: Greetings!");
})

it('should display farewell when button is pressed', () => {
    render(<StringAdder />)

    expect(document.querySelector('p')).toHaveTextContent("The module says:");

    fireEvent.click(screen.getByText('Bye'));

    expect(document.querySelector('p')).toHaveTextContent("The module says: Farewell you!");
})
