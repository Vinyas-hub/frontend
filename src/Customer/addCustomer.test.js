import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import AddCustomer from './addCustomer';

describe('case 2', () => {
    test("test 7",()=>{
        
        render(<AddCustomer/>)
   //  const customerID=screen.getByTestId("customerID")
        const customerName=screen.getByTestId("customerName")
        const customerPassword=screen.getByTestId("customerPassword")
        const address=screen.getByTestId("address")
        const email=screen.getByTestId("email")
        const mobile=screen.getByTestId("mobile")
        
        const btn=screen.getByTestId("addbtn")


    //  fireEvent.change(customerID,{target:{value:1}})
        fireEvent.change(customerName,{target:{value:"vinyas"}})
        fireEvent.change(customerPassword,{target:{value:1234}})
        fireEvent.change(address,{target:{value:"updupi"}})
        fireEvent.change(email,{target:{value:"vinyas@gmail.com"}})
        fireEvent.change(mobile,{target:{value:1234554321}})
        
        fireEvent.click(btn)
      const message=screen.getByTestId("message")

      expect(message.textContent).toBe(" customer ")

        
    })
})