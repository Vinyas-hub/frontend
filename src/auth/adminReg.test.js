import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import AdminRegistration from './adminReg';
describe('case 2', () => {
    test("test 13",()=>{
        
        render(<AdminRegistration/>)
       const adminName=screen.getByTestId("adminName")
        const email=screen.getByTestId("email")
     const password=screen.getByTestId("password")
        const mobile=screen.getByTestId("mobile")
        
        const btn=screen.getByTestId("addbtn")


    fireEvent.change(adminName,{target:{value:"vinyas"}})
        fireEvent.change(email,{target:{value:"vinyas@gmail.com"}})
     fireEvent.change(password,{target:{value:1234}})
        fireEvent.change(mobile,{target:{value:9876543210}})
        
        fireEvent.click(btn)
      const message=screen.getByTestId("message")

      expect(message.textContent).toBe("   ")

        
    })
})