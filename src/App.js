import React from 'react';
import './App.css';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';


class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {tasks: []};
   }
   
   addTask = (title, description) => {
      const newTask = {
         title,
         description,
         id: this.state.tasks.length
      }
      this.setState({
         tasks: [...this.state.tasks, newTask]
      })
   }
   
   deleteTask = id => {
      const newTasks = this.state.tasks.filter(task => task.id !== id);
      this.setState({tasks: newTasks})
   }
   
   checkDone = id => {
     const newTasks = this.state.tasks.map(task => {
         if(task.id === id) {
            task.done = !task.done
         }
         return task;
      });
      this.setState({
         tasks: newTasks
      })
   }
   
   render() {
      return <div className='ctn'>
         <h1>App task - Practice</h1>
         <TaskForm addTask={this.addTask}/>
         <div className='tasks'>
            <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
         </div>
         
      </div>
   }
}

export default App;
