import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
    const list = [];
    props.todos.forEach((todo, i) => list.unshift(<TodoListItem key={i} todoList={todo}/>));

    return (
        <ul> 
            {list}
        </ul>
    )
}

export default TodoList;