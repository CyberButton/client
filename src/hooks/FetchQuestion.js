import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
// import data, { answers } from "../database/data";

/** redux actions */
import * as Action from '../redux/question_reducer'
import { getServerData } from "../helper/helper";
import { setNameOfMCQ } from "../redux/result_reducer";

/** fetch question hook to fetch api data and set value to store */
export const useFetchQestion = () => {
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});
    
    const IDOFMC = useSelector(state => state.temp)
    console.log(IDOFMC)
    
    
    const IDOFMCQ = useSelector(state => state.temp.IDOFMCQ)
    console.log(IDOFMCQ)

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        /** async function fetch backend data */
        (async () => {
            try {
                //let question = await data;
                const serverData = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)
                
                const [{ questions, answers, nameOfMCQ }] = serverData.find((item) => item._id === IDOFMCQ)
                
                console.log({ questions, answers, nameOfMCQ })

                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : questions}));
                    dispatch(setNameOfMCQ(nameOfMCQ))
                    /** dispatch an action */
                    dispatch(Action.startExamAction({question : questions, answers}))
                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}


/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}