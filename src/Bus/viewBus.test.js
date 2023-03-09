import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ViewBus from './viewBus';

describe('case 2', () => {
    test("test 5",()=>{
        
        render(<ViewBus/>)
       // const session_key=screen.getByTestId("session_key")
        const busId=screen.getByTestId("busId")
        const btn=screen.getByTestId("addbtn")


       // fireEvent.change(session_key,{target:{value:"h1rNkz"}})
        fireEvent.change(busId,{target:{value:1}})
        fireEvent.click(btn)
      const message=screen.getByTestId("message")

      expect(message.textContent).toBe(" viewBus ")

        
    })
})