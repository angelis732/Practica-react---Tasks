import React from 'react';


// import Tasks from "./Tasks";


class TaskForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         title: '',
         description: ''
      }
   }
   
   onSubmit = (e) => {
      e.preventDefault();
      if(this.state.title && this.state.description){
         this.props.addTask(this.state.title, this.state.description)
      }else{
         return alert('You must fill in both fields')
      }
      
      this.setState({ title: "" , description: ""});
   }
   
   onChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      })
      
   }
   
   render(){
      const { title, description } = this.state;
      return (
         <form className='form' onSubmit={this.onSubmit}>
            <div className="taskWrite">
               <label className="form-label" >Task</label>
               <input className="form-control"
                  name='title'
                  type='text'
                  placeholder='Write a task'
                  onChange={this.onChange}
                  value={title}/><br/>
            </div>
            <div className="mb-3">
               <label className="form-label">Description</label>
               <textarea className="form-control"
                         name='description'
                         placeholder='Write a description'
                         onChange={this.onChange}
                         value={description}/>
            </div>
            
            <input className='botonAdd' type='submit' value='Add task'/>
            
         </form>
      )
   }
}
export default TaskForm;

