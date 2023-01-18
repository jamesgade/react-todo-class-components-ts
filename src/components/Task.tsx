import { Component, ReactNode } from "react";
import { TaskType } from "../@types/TaskType";
import { FaTimes } from 'react-icons/fa'

interface TaskPropType {
    task: TaskType,
    onDelete: (id: string | number) => void
    onToggle: (id: string | number) => void
}

class Task extends Component<TaskPropType> {
    render(): ReactNode {
        return (
            <div className={`task ${this.props.task.reminder ? 'reminder' : ''}`} onDoubleClick={() => this.props.onToggle(this.props.task.id)}>
                <h3>
                    {this.props.task.description}
                    <FaTimes onClick={() => this.props.onDelete(this.props.task.id)} style={{ color: 'red' }} />
                </h3>
                <p>{this.props.task.date}</p>
            </div>
        )
    }
}

export default Task;
