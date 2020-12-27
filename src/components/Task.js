import React from 'react';

class Task extends React.Component{
   
   styleCompleted() {
      return {
         color: this.props.task.done ? 'gray' : 'black',
         textDecoration: this.props.task.done ? 'line-through' : 'none'
      }
   }
   
   render() {
      const { task, deleteTask, checkDone } = this.props;
      return <div className='task'>
         <button className='botonDelete' onClick={deleteTask.bind(this, task.id)}>X</button>
         <div style={this.styleCompleted()}>
            <div className='titleTask'>
               <input className='inputCheck' type='checkbox' onChange={checkDone.bind(this, task.id)}/>
               {task.title}
            </div>
            <div className='descripTask'>{task.description}</div>
            <div>{task.done}</div>
         </div>
      </div>
      
   }
}

export default Task;