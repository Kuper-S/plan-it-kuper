import { useState } from "react";
import React  from 'react'

// npm i @material-ui/pickers אם אין לכם את החבילה הזאת 
function DatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          isClearable
          placeholderText="I have been cleared!"
        />
      );
}

export default DatePicker