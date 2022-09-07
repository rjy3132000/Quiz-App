import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { handleAmountChange, handleScoreChange } from '../Redux/Action/action'


function FinalScreen() {
  let dispatch = useDispatch()
  let { score } = useSelector(state => state)
  let navigate = useNavigate()

  let handleBackToHome = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate("/")
  }


  return (
    <Box mt={30}>
      <Typography variant='h3' fontWeight={"bold"} mb={3}>Final Score:  {score}</Typography>
      <Button onClick={handleBackToHome} variant="outlined">Back to Home..!</Button>
    </Box>
  )
}

export default FinalScreen