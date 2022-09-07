import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from "react-redux";
import { handleAmountChange } from '../Redux/Action/action';

function TextFieldComp() {

  let disatch = useDispatch()

    let handleChange = (e) => {
        let val = e.target.value
        disatch(handleAmountChange(val));
    }

  return (
    <Box mt={3} width="100%">
        <FormControl size='small' fullWidth>
          <TextField onChange={handleChange} label="Amount of Questions" variant="outlined" type={"number"} size="small" required/>
        </FormControl>
    </Box>
  )
}

export default TextFieldComp