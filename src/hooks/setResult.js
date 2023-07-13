import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}
export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResults = (resultData) => {
    const {results, username} = resultData;
    (async () => {
        try {
            if(results !== [] && !username) {
                throw new Error("Couldnt get resluts")
            }
            await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/results`, resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })()
}