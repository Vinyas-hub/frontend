import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import AddFeedback from './addFeedback';
describe('case 2', () => {
    test("test 11",()=>{
        
        render(<AddFeedback/>)
    //   const session_key=screen.getByTestId("session_key")
        const feedback=screen.getByTestId("feedback")
        const rating=screen.getByTestId("rating")
        const bookingId=screen.getByTestId("bookingId")
        const packageId=screen.getByTestId("packageId")
        
       const btn=screen.getByTestId("addbtn")


     //   fireEvent.change(session_key,{target:{value:"h1rNkz"}})
        fireEvent.change(feedback,{target:{value:"good experince"}})
        fireEvent.change(rating,{target:{value:8}})
        fireEvent.change(bookingId,{target:{value:1}})
        fireEvent.change(packageId,{target:{value:1}})
        
       fireEvent.click(btn)
      const message=screen.getByTestId("message")

      expect(message.textContent).toBe(" Feedback added ")
      

        
    })
})