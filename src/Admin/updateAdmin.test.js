import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import AddReport from './addReport';
import UpdateAdmin from './updateAdmin';
describe('case 2', () => {
    test("test 12",()=>{
        
        render(<UpdateAdmin/>)
      // const session_key=screen.getByTestId("session_key")
       // const adminID=screen.getByTestId("adminID")
        const adminName=screen.getByTestId("adminName")
        const email=screen.getByTestId("email")
        const password=screen.getByTestId("password")
        const mobile=screen.getByTestId("mobile")
       
        
        const btn=screen.getByTestId("addbtn")


      //  fireEvent.change(session_key,{target:{value:"h1rNkz"}})
       // fireEvent.change(adminID,{target:{value:1}})
        fireEvent.change(adminName,{target:{value:"vinyas"}})
        fireEvent.change(email,{target:{value:"vinyas@gmail.com"}})
        fireEvent.change(password,{target:{value:1234}})
        fireEvent.change(mobile,{target:{value:9876543210}})

        fireEvent.click(btn)
      const message=screen.getByTestId("message")

      expect(message.textContent).toBe(" Admin updated ")

        
    })
})