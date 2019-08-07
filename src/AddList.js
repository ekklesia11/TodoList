import React from 'react';

const AddList = (props) => (
    <div className='addList'>
        <input type='radio' name='when' value='today' onChange={props.todayOrTomorrow}></input>today
        <input type='radio' name='when' value='tomorrow' onChange={props.todayOrTomorrow}></input>tomorrow<br></br>
        <input type='text' className="input" onKeyPress={props.handleKeyEnter}></input>
        <input type='button' value='add' onClick={props.addList}></input>
    </div>
);

export default AddList;