import * as api from "../api";
import {FETCH_ALL_PLANS,
    ADD_PLAN,
    UPDATE_PLAN,
    DELETE_PLAN,
    EDIT_PLAN,
    SHOWLOADER,
    HIDELOADER,
    

 } from "./constants";

export const getPlans = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStories();
        dispatch({ type: FETCH_ALL_PLANS, payload: data });
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
};

export const addPlans = () => (dispatch) =>{
    try{

    } catch (error) {
        console.log(error.message)
       throw new Error(error.message)
    }
};