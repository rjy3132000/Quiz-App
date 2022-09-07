import React from 'react';
import { Button, CircularProgress, Typography } from "@mui/material";
import SelectField from './SelectField';
import { Box } from '@mui/system';
import TextFieldComp from './TextField';
import useAxios from '../hooks/useAxios';
import { useNavigate } from "react-router-dom"

function Setting() {
    let navigate = useNavigate()

    let { reponse, error, loading } = useAxios({url:"/api_category.php"})
    console.log(reponse)

    if(loading) {
        return(
            <Box mt={20}> <CircularProgress /> </Box>
        )
    }

    if(error) {
        return(
            <Typography variant='h6' mt={20} color="red">Something Went Wrong</Typography>
        )
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        navigate("/questions")
    }

    let difficultyOptions = [
        {id:"easy", "name":"Easy"},
        {id:"medium", "name":"Medium"},
        {id:"hard", "name":"Hard"},
    ]

    let typeOptions = [
        { id:"multiple", "name":"Multiple Choise" },
        { id:"boolean", "name":"True/False" },
    ]



  return (
    <div>
        <Typography variant="h3" fontWeight={"bold"}>Quiz App</Typography>
        <form onSubmit={handleSubmit}>
            <SelectField options={reponse.trivia_categories} label="Category"/>
            <SelectField options={difficultyOptions} label="Difficulty"/>
            <SelectField options={typeOptions} label="Type"/>
            <TextFieldComp />
            
            <Box mt={3} width="100%">
                <Button fullWidth variant='contained' type='submit'>Get Started</Button>
            </Box>
        </form>
    </div>
  )
}

export default Setting