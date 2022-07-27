import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";

function EventNameDialog({nextStep, setEventObj, closeDialog}) {
    const [input,setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleNextButton = (e) => {
        e.preventDefault()

        if(input === '') {
          alert('Event can not be empty')
          return
        }
        setEventObj(prevState => ({...prevState, eventName: input}))
        nextStep()
    }

  return (
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <DialogTitle>
            <Grid container justify="space-between" alignItems="center">
              <Typography variant="div">Event name</Typography>
              <IconButton onClick={closeDialog}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </DialogTitle>
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