import React from 'react';
import TodoListItem from './TodoListItem'

const Tomorrow = (props) => {
    const list = [];
    props.todos.forEach((todo, i) => list.unshift(<TodoListItem key={i} todoList={todo} crossoutDone={props.crossoutDone} done={props.done} />));

    return (
        <div className='tomorrow'>
            <div className='tomorrowTodoList'>
                <h4>Tomorrow's TODO</h4>
            </div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default Tomorrow;