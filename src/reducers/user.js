const initState = {
    list:[],
    activeID: null
}

const userReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_USER':
            return state;
        default:
            return state;
    }
}

export default userReducer;