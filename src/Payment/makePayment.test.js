import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import MakePayment from './makePayment';

describe('case 2', () => {
    test("test 3",()=>{
        
        render(<MakePayment/>)

        const bookingId=screen.getByTestId("bookingId")
      const upi_Id=screen.getByTestId("upi_Id")
      const pin=screen.getByTestId("pin")
      const btn=screen.getByTestId("addbtn")

      fireEvent.change(bookingId,{target:{value:2}})
      fireEvent.change(upi_Id,{target:{value:"john@oaxios"}})
      fireEvent.change(pin,{target:{value:123456}})
      
      fireEvent.click(btn)
      const message=screen.getByTestId("message")

      expect(message.textContent).toBe(" payment ")

    })
})