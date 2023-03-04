import { render, screen, fireEvent } from '@testing-library/react';
import BusReg from '../Bus/addBus';


describe('BusReg component', () => {
  it('should display validation errors if required fields are empty on submit', () => {
    render(<BusReg />);

    // Find all form inputs
    const sessionKeyInput = screen.getByLabelText(/Enter Session Key/i);
    const busNumberInput = screen.getByLabelText(/Enter Bus Number/i);
    const capacityInput = screen.getByLabelText(/Enter Capacity/i);
    const availableSeatInput = screen.getByLabelText(/Enter Available Seat/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    // Click submit button
    fireEvent.click(submitButton);

    // Expect validation errors to be displayed
    expect(screen.getByText(/session_key is blank/i)).toBeInTheDocument();
    expect(screen.getByText(/bus Number is blank/i)).toBeInTheDocument();
    expect(screen.getByText(/capacity is blank/i)).toBeInTheDocument();
    expect(screen.getByText(/available seat blank/i)).toBeInTheDocument();
  });
});
