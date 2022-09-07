import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../Redux/Action/action';


function SelectField(props) {
    let { label, options } = props;
    const [value, setValue] = useState("");
    let dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value)
        switch(label) {
            case "Category":
                dispatch(handleCategoryChange(e.target.value))
                break;
            case "Type":
                dispatch(handleTypeChange(e.target.value))
                break;
            case "Difficulity":
                dispatch(handleDifficultyChange(e.target.value))
                break;
            default:
                return
        }
    }
  return (
    <div>
        <Box mt={3} width="100%">
            <FormControl fullWidth size='small'>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange} required>
                    {options.map(({id, name}) => {
                        return (
                            <MenuItem value={id} key={id}>{name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    </div>
  )
}

export default SelectField