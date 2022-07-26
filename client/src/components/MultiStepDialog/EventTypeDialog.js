import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    pool: true,
    party: false,
    camping: false,
    bbq: false
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

  const { pool, party, camping, bbq } = state;
  const error = [pool, party, camping, bbq].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Event Types </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={pool}
                onChange={handleChange}
                name="pool"
                size="large"
              />
            }
            label="Pool Day"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={bbq}
                onChange={handleChange}
                name="bbq"
                size="large"
                color="warning"
              />
            }
            label="BBQ with Friends"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={party}
                onChange={handleChange}
                name="party"
                size="large"
                color="success"
              />
            }
            label="Beach Party"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={camping}
                onChange={handleChange}
                name="camping"
                size="large"
                color="secondary"
              />
            }
            label="Camping"
          />
        </FormGroup>
        <FormHelperText>Choose One Type or More</FormHelperText>
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        {/* <FormHelperText>Choose One Type </FormHelperText> */}
      </FormControl>
    </Box>
  );
}
