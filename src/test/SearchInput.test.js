import React from 'react';
import { render, fireEvent } from '@testing-library/react'; // Importing the required testing utilities from React Testing Library
import SearchInput from '../components/SearchInput';

describe('SearchInput', () => {
  it('should render a div with class "component-search-input"', () => {
    const { container } = render(<SearchInput />); // Rendering the component using the render method from React Testing Library and destructuring the returned container
    expect(container.querySelector('div.component-search-input')).toBeTruthy(); // Using the querySelector method to check if the component renders a div with the expected class name
  });

  it('should render an input element', () => {
    const { container } = render(<SearchInput />); // Rendering the component
    expect(container.querySelector('input')).toBeTruthy(); // Using the querySelector method to check if the component renders an input element
  });

  it('should call the "textChange" prop when the input value changes', () => {
    const textChangeMock = jest.fn(); // Creating a mock function using Jest's fn method
    const { container } = render(<SearchInput textChange={textChangeMock} />); // Rendering the component with the mock function as the textChange prop
    const inputElement = container.querySelector('input'); // Getting a reference to the input element using the querySelector method
    fireEvent.change(inputElement, { target: { value: 'test' } }); // Simulating a change event on the input element using the fireEvent method from React Testing Library
    expect(textChangeMock).toHaveBeenCalled(); // Checking if the mock function was called using the toHaveBeenCalled method from Jest
  });
});
