import React from 'react';
// import TodoList from './TodoList';
import AddList from './AddList';
import Today from './Today';
import Tomorrow from './Tomorrow';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todayTodos: [],
            tomorrowTodos: [],
            when: null,
        };
        this.addList = this.addList.bind(this);
        this.handleKeyEnter = this.handleKeyEnter.bind(this);
        this.todayOrTomorrow = this.todayOrTomorrow.bind(this);
        // this.deleteDone = this.deleteDone.bind(this);
        // this.crossoutDone = this.crossoutDone.bind(this);
    }

    addList() {
        let input = document.getElementsByClassName('input')[0];
        let list = [];
        list.push(input.value);
        if (input.value) {
            if (this.state.when === 'today') {
                this.setState(state => {
                    return {todayTodos: state.todayTodos.concat(list)};
                })
            } else if (this.state.when === 'tomorrow') {
                this.setState(state => {
                    return {tomorrowTodos: state.tomorrowTodos.concat(list)};
                })
            }
        }
        input.value = '';
    }

    handleKeyEnter(e) {
        let input = document.getElementsByClassName('input')[0];
        if (e.charCode === 13 && input.value) {
            this.addList();
        }
    }

    todayOrTomorrow(e) {
        this.setState({
            when: e.currentTarget.value,
        })
    }

    render() {
        return (
            <div className="todoListMain">
                <h2>To Do List</h2>
                <AddList addList={this.addList} handleKeyEnter={this.handleKeyEnter} todayOrTomorrow={this.todayOrTomorrow} />
                <Today todos={this.state.todayTodos} crossoutDone={this.crossoutDone} done={this.state.done} />
                <Tomorrow todos={this.state.tomorrowTodos} crossoutDone={this.crossoutDone} done={this.state.done} />
            </div>
        );
    }
}

export default App;