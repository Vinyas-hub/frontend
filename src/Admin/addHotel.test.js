import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import AddHotel from './addHotel';

describe('case 2', () => {
    test("test 6",()=>{
        
        render(<AddHotel/>)
        // const session_key=screen.getByTestId("session_key")
       // const hotel_Id=screen.getByTestId("hotel_Id")
        const hotelName=screen.getByTestId("hotelName")
        const hotelDescription=screen.getByTestId("hotelDescription")
       
        const state=screen.getByTestId("state")
        const city=screen.getByTestId("city")
        const landmark=screen.getByTestId("landmark")
        const pin=screen.getByTestId("pin")
        const hotelRent=screen.getByTestId("hotelRent")
        const btn=screen.getByTestId("addbtn")


        // fireEvent.change(session_key,{target:{value:"h1rNkz"}})
        //fireEvent.change(hotel_Id,{target:{value:1}})
        fireEvent.change(hotelName,{target:{value:"anand bhavan"}})
        fireEvent.change(hotelDescription,{target:{value:"since 1988"}})
       
        fireEvent.change(state,{target:{value:"kerala"}})
        fireEvent.change(city,{target:{value:"kannur"}})
        fireEvent.change(landmark,{target:{value:"near airport"}})
        fireEvent.change(pin,{target:{value:123456}})
        fireEvent.change(hotelRent,{target:{value:1000}})
        fireEvent.click(btn)
      const message=screen.getByTestId("message")

      expect(message.textContent).toBe(" hotel added ")

        
    })
})