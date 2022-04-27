const initState = {
    list:[],
    activeID: null
}

const hobbyReducer = (state = initState,action) => {
    switch(action.type){
        case 'ADD_HOBBY':
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList
            };

        case 'SET_ACTIVE_HOBBY':
            const newActiveID = action.payload;
            return{
                ...state,
                activeID: newActiveID
            };
        default:
            return state;
    }
}

export default hobbyReducer;