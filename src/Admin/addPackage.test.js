import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import PackageAdd from './addPackage';

describe('case 2', () => {
    test("test 8",()=>{
        
        render(<PackageAdd/>)
      //  const session_key=screen.getByTestId("session_key")
        const packageName=screen.getByTestId("packageName")
        const packageDescription=screen.getByTestId("packageDescription")
      const routeId=screen.getByTestId("routeId")
      const hotel_Id=screen.getByTestId("hotel_Id")
      const busId=screen.getByTestId("busId")
      const packageCost=screen.getByTestId("packageCost")
      const packageCapacity=screen.getByTestId("packageCapacity")
        const btn=screen.getByTestId("addbtn")


       // fireEvent.change(session_key,{target:{value:"h1rNkz"}})
        fireEvent.change(packageName,{target:{value:"goa tour"}})
        fireEvent.change(packageDescription,{target:{value:"3days 4nights"}})
        fireEvent.change(routeId,{target:{value:2}})
        fireEvent.change(hotel_Id,{target:{value:1}})
        fireEvent.change(busId,{target:{value:1}})
        fireEvent.change(packageCost,{target:{value:5600}})
        fireEvent.change(packageCapacity,{target:{value:16}})
        fireEvent.click(btn)
      const message=screen.getByTestId("message")

      expect(message.textContent).toBe(" package added ")

        
    })
})