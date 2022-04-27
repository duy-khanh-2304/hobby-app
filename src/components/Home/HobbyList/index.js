import React from "react";
import  PropTypes from 'prop-types';
import './HobbyList.css';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeID: PropTypes.number,
    onHobbyClick: PropTypes.func
}

HobbyList.defaultProps = {
    hobbyList: [],
    activeID: null,
    onHobbyClick: null
}

function HobbyList(props){
    const {hobbyList, activeID, onHobbyClick} = props;

    const handleClickHobby = (index) =>{
        console.log('click index' + index);
        if(onHobbyClick){
            onHobbyClick(index);
        }
    }

    return(
        <ul className="hobby-list">
            {hobbyList.map((hobby,index)=>{
                return  <li 
                            key={index}
                            className={index === activeID ? 'active' : ''}
                            onClick = {()=>handleClickHobby(index)}
                        >
                            {hobby.title}
                        </li>
            })}
        </ul>
    )
}

export default HobbyList;