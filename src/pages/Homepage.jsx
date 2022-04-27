import React  from "react";
import {useSelector, useDispatch} from 'react-redux';
import HobbyList from '../components/Home/HobbyList'
import {addHobby, setActiveHobby} from '../actions/hobby.js'

const randomNumber = () =>{
    return Math.floor(Math.random()*9 + 1);
}

function Homepage(){

    const hobbyList = useSelector(state=>state.hobby.list);
    const activeID  = useSelector(state=>state.hobby.activeID);

    const dispatch = useDispatch();

    const handleRandomHobby = () =>{
        const newID = randomNumber();
        const newHobby = {
            title:`Hobby ${newID}`,
            id: newID
        };
        const action = addHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (index) =>{
        const action = setActiveHobby(index);
        dispatch(action);
    }

    return(
        <div className="homePage">
            <h1>Redux Hooks - Home page</h1>
            <button onClick={handleRandomHobby}>Random hobby</button>

            <HobbyList
                hobbyList={hobbyList}
                activeID={activeID}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    );
}

export default Homepage;