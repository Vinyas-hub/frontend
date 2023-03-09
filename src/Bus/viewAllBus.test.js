import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ViewAllBus from './viewAllBus';

describe('case 2', () => {
    test("test 4",()=>{
        
        render(<ViewAllBus/>)
       // const session_key=screen.getByTestId("session_key")
        const btn=screen.getByTestId("addbtn")

      //  fireEvent.change(session_key,{target:{value:"h1rNkg"}})
        fireEvent.click(btn)
      const message=screen.getByTestId("message")

      expect(message.textContent).toBe(" AllBus ")

        
    })
})