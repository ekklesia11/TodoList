import React from 'react';
import TodoListItem from './TodoListItem';

const Today = (props) => {
    const list = [];
    props.todos.forEach((todo, i) => list.unshift(<TodoListItem key={i} todoList={todo} crossoutDone={props.crossoutDone} done={props.done} />));

    return (
        <div className='today'>
            <div className='todayTodos'>
                <h4>Today's TODO</h4>
            </div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default Today;