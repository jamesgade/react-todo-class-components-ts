import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TasksType } from './@types/TasksType';
import { TaskType } from './@types/TaskType';
import About from './components/About';
import Footer from './components/Footer';

interface AppPropsType { }
interface AppStateType {
	tasks: TaskType[],
	showAddForm: boolean
}

class App extends Component<AppPropsType, AppStateType> {

	constructor(props: TasksType) {
		super(props);

		this.state = {
			tasks: [
				{
					id: 1,
					description: 'Dentist Appointment',
					date: 'Jan 25th at 11:30AM',
					reminder: true
				},
				{
					id: 2,
					description: 'Anniversery',
					date: 'Jan 22th at 1:30AM',
					reminder: false
				},
				{
					id: 3,
					description: 'Republic Day',
					date: 'Jan 26th',
					reminder: true
				},
			],
			showAddForm: false
		}

		this.deleteTask = this.deleteTask.bind(this);

	}

	addTask = (task: any) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task }
		this.setState((prevState) => ({
			tasks: [newTask, ...prevState.tasks]
		}))
	}

	deleteTask = (id: string | number) => {
		this.setState((prevState) => ({
			tasks: prevState.tasks.filter((task: TaskType) => task.id !== id)
		}))
	}

	toggleReminder = (id: string | number) => {
		this.setState((prevState) => ({
			tasks: prevState.tasks.map((task: TaskType) => task.id === id ? { ...task, reminder: !task.reminder } : task)
		}))
	}

	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Header
						title='CRUD-TS'
						showForm={() => this.setState({ showAddForm: !this.state.showAddForm })}
						showAddForm={this.state.showAddForm}
					/>
					<Routes>
						<Route path="/" element={
							<>
								{this.state.showAddForm && <AddTask onAdd={this.addTask} />}
								{this.state.tasks.length > 0
									? <Tasks
										onDelete={this.deleteTask}
										tasks={this.state.tasks}
										onToggle={this.toggleReminder}
									/>
									: 'No tasks found click "Add" to create a task'
								}
								<Footer goto="about" label="Go to About" />
							</>
						} />
						<Route path="about" element={<About />} />
						<Route path="*" element={
							<>
								<h4>Page not found</h4>
							</>
						} />
					</Routes>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
