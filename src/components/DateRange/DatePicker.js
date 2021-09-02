import React, {useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState("");
    return (
        <div style={{width: "100%", backgroundColor:"green"}}>
            
             <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  style={{width: "50%"}}/>
        
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}  style={{width: "50%"}}/>
            
        </div>
    )
}

export default DatePickerComponent
