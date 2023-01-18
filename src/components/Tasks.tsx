import { Component, ReactNode } from "react";
import { TasksType } from "../@types/TasksType";
import { TaskType } from "../@types/TaskType";
import Task from "./Task";

interface TasksPropsType extends TasksType {
    onDelete: (id: string | number) => void
    onToggle: (id: string | number) => void
}

class Tasks extends Component<TasksPropsType> {

    render(): ReactNode {
        return (
            <>
                {this.props.tasks.map((task: TaskType) =>
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={this.props.onDelete}
                        onToggle={this.props.onToggle}
                    />
                )}
            </>
        )
    }
}

export default Tasks;
