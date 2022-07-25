import actionTypes from "../actions/constants"

const initialState = {
    plans : [],
    counterWizard : 0,

}

const plansReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PLAN:
            return {
                ...state,
                plans: [...state.plans, ...action.payload]
            };
        // case "CREATE_PLAN":
        //     return [...state, action.payload];
        // case "UPDATE_PLAN":
        //     return state.map(plan => plan._id === action.payload._id ? action.payload : plan);
        // case "DELETE_PLAN":
        //     return state.filter(plan => plan._id !== action.payload);
        default:
            return state;
    }

};

export default plansReducer;


