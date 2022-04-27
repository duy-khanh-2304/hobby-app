const addHobby = payload => {
    const action = {
        type :'ADD_HOBBY',
        payload
    }
    return action;
}

const setActiveHobby = payload => {
    const action = {
        type :'SET_ACTIVE_HOBBY',
        payload
    }
    return action;
}

export {addHobby, setActiveHobby};