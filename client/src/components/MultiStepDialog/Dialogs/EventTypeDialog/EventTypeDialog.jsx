import { useState } from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Radio  from "@mui/material/Radio";
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";

const EventTypeDialog = ({nextStep,prevStep, setEventObj, closeDialog, style}) => {
  const [type, setType] = useState('');

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const handleNextButton = (e) => {
    e.preventDefault()
    if(type === ''){
      alert('please select a type')
      return;
    }
    setEventObj(prevState => ({...prevState, eventType: type}))
    nextStep()
  }

  const handlePrevButton = (e) => {
    e.preventDefault();
    prevStep();
  } 

  //const { pool, party, camping, bbq } = type;

  return (
    <Dialog
        open
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle>
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="div">Pick a Event type</Typography>
            <IconButton onClick={closeDialog}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </DialogTitle>
        <Box sx={{ display: "flex" }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Event Types</FormLabel>
            <RadioGroup
              value={type}
              onChange={handleChange}
              defaultValue="bbq">
              <FormControlLabel
                value="pool day"
                control={<Radio />}
                label="Pool Day"
              />
              <FormControlLabel
                value="bbq"
                control={<Radio />}
                label="BBQ with Friends"
              />
              <FormControlLabel
                value="party"
                control={<Radio />}
                label="Party"
              />
              <FormControlLabel
                value="camping"
                control={<Radio />}
                label="Camping"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <div style={style}>
        <Button
          color="secondary"
          variant="contained"
          onClick={handlePrevButton}>
            Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleNextButton}>
            Next
        </Button>
        </div>
    </Dialog>
  );
}

export default EventTypeDialog
