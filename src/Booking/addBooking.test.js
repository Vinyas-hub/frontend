import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import AddBooking from './addBooking';
describe('case 2', () => {
    test("test 10",()=>{
        
        render(<AddBooking/>)
     //  const session_key=screen.getByTestId("session_key")
        const packageId=screen.getByTestId("packageId")
        const customerId=screen.getByTestId("customerId")
        const noOfPersons=screen.getByTestId("noOfPersons")
        
        const btn=screen.getByTestId("addbtn")


   //     fireEvent.change(session_key,{target:{value:"h1rNkz"}})
        fireEvent.change(packageId,{target:{value:1}})
        fireEvent.change(customerId,{target:{value:2}})
        fireEvent.change(noOfPersons,{target:{value:10}})
        
        fireEvent.click(btn)
      const message=screen.getByTestId("message")

      expect(message.textContent).toBe(" booking added ")

        
    })
})