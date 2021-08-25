import React, { Component } from 'react';

import './Task.css';

class Task extends Component {
    render() {
        const {task} = this.props;

        return <div class="red">
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" ></input>
            <button>X</button>
        </div>
    }
}

export default Task;