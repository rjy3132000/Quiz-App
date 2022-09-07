import { CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_TYPE, CHANGE_AMOUNT, CHANGE_SCORE } from "./actionType" 

export let handleCategoryChange = (payload) => {
    console.log(payload);
    return {
        type:CHANGE_CATEGORY,
        payload,
    }
}


export let handleDifficultyChange = (payload) => ({
    type:CHANGE_DIFFICULTY,
    payload,
})


export let handleTypeChange = (payload) => ({
    type:CHANGE_TYPE,
    payload,
})


export let handleAmountChange = (payload) => ({
    type:CHANGE_AMOUNT,
    payload,
})


export let handleScoreChange = (payload) => ({
    type:CHANGE_SCORE,
    payload,
})