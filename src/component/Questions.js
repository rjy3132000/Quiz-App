import { Box, Button, Typography,CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import useAxios from '../hooks/useAxios';
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { handleScoreChange } from '../Redux/Action/action';
import { decode } from 'html-entities';


let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

function Questions() {

  let {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector(state => state)

  let dispatch = useDispatch()
  let apiURL = `/api.php?amount=${amount_of_question}` ;

  if(question_category) {
    apiURL = apiURL.concat(`&category=${question_category}`)
  }

  if(question_difficulty) {
    apiURL = apiURL.concat(`&difficulty=${question_difficulty}`)
  }

  if(question_type) {
    apiURL = apiURL.concat(`&type=${question_type}`)
  }

  let { reponse, error, loading } = useAxios({url:apiURL})
  let [questionIndex, setQuestionState] = useState(0)
  let [option, setOption] = useState([]);
  let navigate = useNavigate()

  console.log(option, typeof option)

  useEffect(()=> {
    if(reponse?.results.length) {
      let question = reponse.results[questionIndex]
      let answer = [...question.incorrect_answers];
      answer.splice(
        getRandomInt(question.incorrect_answers.length), 0,
        question.correct_answer
      )
      setOption(answer);
    }
  }, [reponse,questionIndex])


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

  let handleClickAnswer = (e) => {
    let question = reponse.results[questionIndex]
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score+1))
    }


    if(questionIndex+1  < reponse.results.length)  {
      setQuestionState(questionIndex + 1)
    }
    else {
      navigate("/score")
    }
  }

  return (
    <Box>
      <Typography variant='h4'>Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>{decode(reponse.results[questionIndex].question) }</Typography>

      {
        option.map((data, id)=> (
          <Box mt={3} key={id}> <Button onClick={handleClickAnswer} variant='contained'>{decode(data)}</Button> </Box>
        ))
      }

      <Box mt={5}> Score : {score} / {reponse.results.length} </Box>
    </Box>
  )
}

export default Questions