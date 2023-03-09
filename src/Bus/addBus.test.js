import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { ProfileContext } from '../context/profilecontext';
import BusReg from '../Bus/addBus';
import AddForm from '../viewcomponents/addform';

describe('case 2', () => {
  test("test 1",()=>{
    
      render(<BusReg/>)
     
      const busNumber=screen.getByTestId("busNumber")
      const capacity=screen.getByTestId("capacity")
      const availableSeat=screen.getByTestId("availableSeat")
      const btn=screen.getByTestId("addbtn")

      fireEvent.change(busNumber,{target:{value:"ka18ec3456"}})
      fireEvent.change(capacity,{target:{value:56}})
      fireEvent.change(availableSeat,{target:{value:16}})
      fireEvent.click(btn)
      const message=screen.getByTestId("message")

      expect(message.textContent).toBe(" bus added ")
      
     

  })
})
   
