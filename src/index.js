import React from 'react';
import ReactDOM from 'react-dom';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
        };
    }

    onListItemClick = () => (
        this.setState({
            done: !this.state.done,
        })
    )

    render() {
        const style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        };

        return (
            <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todoList}</li>
        );
    }
}

const TodoList = (props) => (
    <ul> 
        {props.todos.map(todo => 
        <TodoListItem todoList={todo}/>
        )}
    </ul>
)


ReactDOM.render(
    <TodoList todos={['getup', 'eat', 'toy-problem', 'study else']} />,
    document.getElementById('root')
  );