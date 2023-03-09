import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import RouteReg from './addroute';

describe('case 2', () => {
    test("test 12",()=>{
        
        render(<RouteReg/>)
        // const session_key=screen.getByTestId("session_key")
       // const hotel_Id=screen.getByTestId("hotel_Id")
     //   const routeId=screen.getByTestId("routeId")
        const routeFrom=screen.getByTestId("routeFrom")
       
        const routeTo=screen.getByTestId("routeTo")
        const pickupPoint=screen.getByTestId("pickupPoint")
        const fare=screen.getByTestId("fare")
        
        const btn=screen.getByTestId("addbtn")


        // fireEvent.change(session_key,{target:{value:"h1rNkz"}})
        //fireEvent.change(hotel_Id,{target:{value:1}})
    //    fireEvent.change(routeId,{target:{value:1}})
        fireEvent.change(routeFrom,{target:{value:"MANGALORE"}})
       
        fireEvent.change(routeTo,{target:{value:"hasan"}})
        fireEvent.change(pickupPoint,{target:{value:"pumpwell"}})
        fireEvent.change(fare,{target:{value:3456}})
       
        fireEvent.click(btn)
      const message=screen.getByTestId("message")

      expect(message.textContent).toBe(" route added ")

        
    })
})