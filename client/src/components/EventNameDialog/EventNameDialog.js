import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import MultiStepDialog from '../MultiStepDialog/MultiStepDialog'

function EventNameDialog() {
    const [input,setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleNextButton = (e) => {
        e.preventDefault()
        MultiStepDialog.nextStep()
        setInput('')
    }

  return (
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <AppBar title="Enter Event Title" />
          <input
            className='createDialog-eventName'
            placeholder="Enter Your Event Name"
            label="Event Name"
            value={input}
            type = "text"
            onChange={handleChange}
            margin="normal"
            fullWidth
            required
          />
          
          <br />
          <Button
            color="primary"
            variant="contained"
            onClick={handleNextButton}
          >Next</Button>
        </Dialog>
  )
}


export default EventNameDialog