import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import AddReport from './addReport';
describe('case 2', () => {
    test("test 9",()=>{
        
        render(<AddReport/>)
      // const session_key=screen.getByTestId("session_key")
        const reportID=screen.getByTestId("reportID")
        const reportName=screen.getByTestId("reportName")
        const reportType=screen.getByTestId("reportType")
        
        const btn=screen.getByTestId("addbtn")


      //  fireEvent.change(session_key,{target:{value:"h1rNkz"}})
        fireEvent.change(reportID,{target:{value:1}})
        fireEvent.change(reportName,{target:{value:"goa tour"}})
        fireEvent.change(reportType,{target:{value:"PROFIT"}})
        
        fireEvent.click(btn)
      const message=screen.getByTestId("message")

      expect(message.textContent).toBe("  ")

        
    })
})