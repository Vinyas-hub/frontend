import { render,screen,fireEvent } from "@testing-library/react"
import React from "react"
jest.mock('axios')
import AddHotel from "./hotel/addhotel"

describe("case 1",()=>{
    test("test 1",()=>{
        render(<AddHotel/>)
        const hotel_Id=screen.getAllByTestId("hotel_Id")
        const hotelName=screen.getAllByTestId("hotelName")
        const hotelDescription=screen.getAllByTestId("hotelDescription")
        const hotelAddress=screen.getAllByTestId("hotelAddress")
        const hotelRent=screen.getAllByTestId("hotelRent")
        const btn=screen.getByTestId("addbtn")

        fireEvent.change(hotel_Id,{target:{value:1}})
        fireEvent.change(hotelName,{target:{value:"vinyas"}})
        fireEvent.change(hotelDescription,{target:{value:"near dtp"}})
        fireEvent.change(hotelAddress,{target:{value:"bangalore"}})
        fireEvent.change(hotelRent,{target:{value:1000}})
        fireEvent.click(btn)

        const message=screen.getByTestId("message")

        expect(message.textContent).toBe("hotel added")



    })
})